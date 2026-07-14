import { useState } from "react";
import { BASKET } from "./Context";

function BasketContext({ children }) {
  const [sebet, setSebet] = useState([]);
  function addBasket(id, image, title, price) {
    setSebet((item) =>
      item.find((item) => item.id === id)
        ? item.map((index) =>
            index.id === id
              ? { ...index, quantity: index.quantity + 1 }
              : index,
          )
        : [...item, { id, image, title, price, quantity: 1 }],
    );
  }

  function incQuantity(id) {
    setSebet((item) =>
      item.map((index) =>
        index.id === id ? { ...index, quantity: index.quantity + 1 } : index,
      ),
    );
  }

  function decQuantity(id) {
    setSebet((item) =>
      item
        .map((index) =>
          index.id === id ? { ...index, quantity: index.quantity - 1 } : index,
        )
        .filter((index) => index.quantity > 0),
    );
  }

  function removeBasket() {
    setSebet([]);
  }

  function removeBasketCart(id) {
    setSebet((item) => item.filter((index) => index.id !== id));
  }

  const totalCount = sebet.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = sebet.reduce((total, item) => total + item.price * item.quantity, 0,);
  const discount = totalCount >= 15 ? 100 :  totalCount >= 10 ? 64 : totalCount >= 6 ? 48 : totalCount >= 3 ? 21 : 0;
  const finalPrice = Math.max(totalPrice - discount, 0);

  return (
    <BASKET.Provider
      value={{
        addBasket,
        removeBasket,
        removeBasketCart,
        sebet,
        incQuantity,
        decQuantity,
        totalPrice,
        totalCount,
        discount,
        finalPrice
      }}
    >
      {children}
    </BASKET.Provider>
  );
}

export default BasketContext;
