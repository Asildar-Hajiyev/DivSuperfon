import { useContext, useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import { WISHLIST } from "../Context/Context";
import Card from "../components/Card";

function Favorite() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { wistList, removeWislist, removeWislistCart } = useContext(WISHLIST);

  return (
    <>
      {wistList.length === 0 ? (
        <div className="flex items-center justify-between flex-col py-48">
          <CiHeart className="text-[120px]" />
          <span className="text-2xl text-gray-600">
            Sizin istək siyahınız boşdur
          </span>
        </div>
      ) : (
        <div className="flex flex-col gap-6 p-4 mt-32 max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-[#001623]">
              İstək siyahım
            </h1>
            <button
              onClick={removeWislist}
              className="text-sm font-medium text-red-500 hover:text-red-700 transition cursor-pointer"
            >
              Siyahını təmizlə
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {wistList.map((item,i)=>(<Card item={item} key={i}/>))}
          </div>
        </div>
      )}
    </>
  );
}

export default Favorite;