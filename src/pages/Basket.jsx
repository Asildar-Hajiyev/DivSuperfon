import { CiShoppingCart } from "react-icons/ci";
import { useContext, useEffect } from "react";
import BasketCart from "./BasketCart";
import BasketSummery from "./BasketSummery";
import { BASKET } from "../Context/Context";

function Basket() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { sebet, removeBasket } = useContext(BASKET);
  return (
    <>
      {sebet.length === 0 ? (
        <div className="flex items-center justify-between flex-col py-48">
          <CiShoppingCart className="text-[120px]" />
          <span className="text-2xl text-gray-600">
            Sizin səbətiniz boşdur
          </span>
        </div>
      ) : (
        <div className="flex flex-col gap-6 p-4 mt-32 max-w-7xl mx-auto">
          {/* Üst hissə - başlıq və təmizləmə düyməsi */}
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-[#001623]">Səbətim</h1>
            <button
              onClick={removeBasket}
              className="text-sm  font-medium text-red-500 hover:text-red-700 transition cursor-pointer"
            >
              Səbəti təmizlə
            </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 items-start">
            {/* SOL - hərəkətli (adi axın) */}
            <div className="w-full lg:flex-1">
              <BasketSummery />
            </div>

            {/* SAĞ - header-ə görə sabit (sticky) */}
            <div className="w-full lg:w-[350px] lg:sticky lg:top-32 shrink-0">
              <BasketCart />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Basket;