import { useState } from "react";
import { BASKET } from "./Context";

function BasketContext({ children }) {
  const [sebet, setSebet] = useState([]);
  function addBasket(id, image,title, price) {
    setSebet([...sebet, { id, image, title, price }]);
    console.log(sebet)
  }

  return (
    <BASKET.Provider value={{ addBasket, sebet }}>{children}</BASKET.Provider>
  );
}

export default BasketContext;
