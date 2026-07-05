import { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { DATA } from "../Context/Context";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

import { CiShoppingCart } from "react-icons/ci";

function Home_Section1_r() {
  const { user } = useContext(DATA);
  const endDate = new Date("2026-07-06T00:00:00");
  const [timeLeft, setTimeLeft] = useState(endDate - new Date());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(endDate - new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const d = Math.max(timeLeft, 0);
  const days = Math.floor(d / 86400000);
  const hours = Math.floor((d / 3600000) % 24);
  const minutes = Math.floor((d / 60000) % 60);
  return (
   <div className="rounded-md bg-gray-100 p-4 sm:p-6 w-full h-[350px] overflow-y-auto lg:h-auto lg:overflow-visible lg:w-[300px] lg:max-w-none lg:mx-0">
      <div className="flex items-center justify-between lg:flex-col gap-2 rounded-md p-2 sm:p-4">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
          Həftənin təklifləri
        </h2>
        <div className="flex items-center gap-2 ">
          <div className="flex flex-col items-center bg-gray-100 rounded-md px-3 py-1 min-w-[50px] ">
            <span className="text-lg font-bold text-orange-500">{days}</span>
            <span className="text-xs text-gray-500">gün</span>
          </div>
          <div className="flex flex-col items-center bg-gray-100 rounded-md px-3 py-1 min-w-[50px]">
            <span className="text-lg font-bold text-orange-500">{hours}</span>
            <span className="text-xs text-gray-500">saat</span>
          </div>
          <div className="flex flex-col items-center bg-gray-100 rounded-md px-3 py-1 min-w-[50px]">
            <span className="text-lg font-bold text-orange-500">{minutes}</span>
            <span className="text-xs text-gray-500">dəqiqə</span>
          </div>
        </div>
      </div>
      <div className="w-full rounded-md custom-swiper-sale">
        <Swiper
          modules={[ Autoplay]}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          slidesPerView={1}
          spaceBetween={10}
           breakpoints={{
            480: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
            }}
          className="rounded-md custom-swiper-sale"
        >
          {user
            .filter((item) => item.onSale)
            .map((item) => (
            <SwiperSlide
                className="flex flex-row lg:flex-col items-center gap-2 lg:gap-0 bg-white border-gray-200 rounded-lg p-2 sm:p-3 lg:p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                key={item.id}
                >
                <div className="w-[70px] lg:w-full aspect-square overflow-hidden rounded-md bg-gray-50 flex-shrink-0">
                    <img
                    className="w-full h-full object-cover"
                    src={item.image}
                    alt={item.title}
                    />
                </div>

                <div className="flex flex-col items-start lg:items-center flex-1 lg:w-full lg:mt-3">
                    <div className="text-left lg:text-center text-sm sm:text-base text-gray-700 font-medium">
                    {item.title.slice(11, 30)}...
                    </div>

                    <button className="flex items-center justify-center gap-1.5 sm:gap-2 bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-md transition-all duration-300 cursor-pointer mt-2 sm:mt-3 w-fit lg:w-full">
                    <CiShoppingCart className="text-base sm:text-lg" />
                    <span className="whitespace-nowrap">Səbətə əlavə et</span>
                    </button>
                </div>
                </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <Link className="block text-center w-full hover:underline transition-all duration-150 mt-2" to="/">Bütün təkliflərə bax</Link>
    </div>
  );
}

export default Home_Section1_r;
