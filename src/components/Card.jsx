import { useContext } from "react";
import { CiShoppingCart, CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BASKET, WISHLIST } from "../Context/Context";

function Card({ item, i }) {
   const {addBasket} = useContext(BASKET)
   const {addWishlist, removeWislistCart , wistList} = useContext(WISHLIST)
   const isInWishlist = wistList.filter((el) => el.id === item.id).length > 0;
   function wishListOnClickMove(){
    isInWishlist ? removeWislistCart(item.id) : addWishlist(item.id,item.image,item.title,item.price)
   }
  return (
    <div className="group relative w-full max-w-[360px] mx-auto border border-gray-300 rounded-md p-4 flex overflow-hidden my-4">
      <div key={i} className="flex flex-col w-full h-full">
        <div className="w-full aspect-square overflow-hidden">
          <img
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-125 "
            src={item.image}
            alt={item.title}
          />
        </div>

        <Link to={`/details/${item.source}/${item.id}`} className="font-semibold text-sm sm:text-base line-clamp-2 mt-3 h-12 hover:underline hover:text-blue-600 transition">
          {item.title}
        </Link>

        <div className="flex-1"></div>

        <div className="flex items-center justify-between mt-4 gap-2">
          <span className="font-semibold text-lg sm:text-xl">
            {item.price} ₼
          </span>

          <button onClick={()=>addBasket(item.id,item.image,item.title,item.price)} className="flex items-center gap-0 group-hover:gap-2 bg-green-600 text-white px-3 py-2 rounded-md transition-all duration-500 cursor-pointer">
            <CiShoppingCart className="text-xl sm:text-2xl" />
            <span className="max-w-0 opacity-0 overflow-hidden whitespace-nowrap group-hover:max-w-[150px] group-hover:opacity-100 transition-all duration-500 text-sm">
              Səbətə əlavə et
            </span>
          </button>
        </div>
      </div>

      <div onClick={wishListOnClickMove} className={`absolute top-4 right-4 bg-white p-2 rounded-full border shadow-lg cursor-pointer transition-all duration-300 ${
          isInWishlist
            ? "opacity-100 border-red-500 text-red-500"
            : "opacity-100 md:opacity-0 md:group-hover:opacity-100 border-gray-100 text-gray-500 hover:text-red-500 hover:border-red-500"
        }`}>
       {isInWishlist ? (
          <CiHeart className="text-2xl" />
        ) : (
          <CiHeart className="text-2xl" />
        )}
      </div>

      <div
        className={`absolute top-0 left-0 m-4 border rounded-xs px-2 bg-green-700 text-white cursor-pointer ${item.isNew ? "" : "hidden"}`}
      >
        Yeni
      </div>
    </div>
  );
}

export default Card;
