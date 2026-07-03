import { CiShoppingCart, CiHeart } from "react-icons/ci";

function Card() {
  return (
   <div className="group relative border border-gray-500 w-full max-w-[400px] p-4 m-3 sm:m-5 rounded-md flex overflow-hidden">
  <div className="flex items-start flex-col w-full">
    <div className="w-full h-[160px] sm:h-[200px] overflow-hidden">
      <img
        className="w-full h-full object-contain transition-transform duration-500 ease-in-out group-hover:scale-110"
        src="https://cdn.superfon.az/i/p/300/113778-b2e4533b3c452057d84da91d8d16e8cb.png?v=8.8.26"
        alt="Product"
      />
    </div>

    <p className="text-sm sm:text-base line-clamp-2 mt-2">
      Sizin burda reklaminiz ola bilerdi, Sizin burda reklaminiz ola bilerdi
    </p>

    <div className="flex items-center justify-between w-full mt-3 gap-2 flex-wrap">
      <span className="font-semibold text-xl">24.99 ₼</span>
      <button className="flex items-center gap-0 group-hover:gap-2 cursor-pointer overflow-hidden max-w-full  shrink-0 bg-green-600 text-white px-2 py-1 rounded-md">
        <CiShoppingCart className=" text-4xl shrink-0 bg-green-600 text-white p-2 rounded-md" />
        <span className="text-sm sm:text-base whitespace-nowrap max-w-0 group-hover:max-w-[120px] sm:group-hover:max-w-[160px] opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
          Səbətə əlavə et
        </span>
      </button>
    </div>
  </div>

  <div className="absolute top-0 right-0 m-3 sm:m-5 border rounded-full p-2 hover:text-red-400 transition-all duration-300 ease-in-out cursor-pointer opacity-0 group-hover:opacity-100">
    <CiHeart className="text-xl sm:text-2xl" />
  </div>
</div>
  );
}

export default Card;