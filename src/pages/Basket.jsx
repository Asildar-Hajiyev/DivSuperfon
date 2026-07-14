import { CiShoppingCart } from "react-icons/ci";
import { useContext, useEffect } from "react";
import BasketCart from "./BasketCart";
import BasketSummery from "./BasketSummery";
import { BASKET } from "../Context/Context";

function Basket() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const {sebet} = useContext(BASKET)
  return (
    <>
      {sebet.length === 0 ? (
        <div className="flex items-center justify-between flex-col py-48">
          <CiShoppingCart className="text-[120px]" />
          <span className="text-2xl text-gray-600">Sizin səbətiniz boşdur</span>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-6 p-4 mt-32 max-w-7xl mx-auto">
          {/* SOL */}
          <BasketSummery  />

          {/* SAĞ */}

          <BasketCart />
        </div>
      )}
    </>
  );
}

export default Basket;
