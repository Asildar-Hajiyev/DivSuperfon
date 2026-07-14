import { useContext } from "react";
import { DATA } from "../Context/Context";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { FaArrowRightLong } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

function Brandsec() {
  const { user3 } = useContext(DATA);

  return (
    <>
     {/* logo hisse */}
      <div className="flex items-center justify-between p-4 md:p-5 lg:p-6 border-b border-gray-300 mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold">Yeniliklər</h2>
        <Link 
          to="/products" 
          className="flex items-center gap-2 hover:underline transition-all duration-300 text-blue-500 text-xs sm:text-sm whitespace-nowrap"
        >
          Hamısına bax <FaArrowRightLong className="text-xs sm:text-sm"/>
        </Link>
      </div>

      
      <div className="w-full px-4 md:px-6">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={16}
        
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 10 }, 
            480: { slidesPerView: 3, spaceBetween: 15 }, 
            768: { slidesPerView: 4, spaceBetween: 20 }, 
            1024: { slidesPerView: 5, spaceBetween: 20 },
          }}
          className="w-full"
        >
          {user3.map((item) => (
            <SwiperSlide key={item.id}>
              <Link 
                to="/" 
                className="bg-white border border-gray-100 rounded-lg p-3 sm:p-4 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300 h-24 sm:h-28"
              >
                <img
                  src={item.image}
                  alt={item.name || "brand"} 
                  className="w-full h-full object-contain max-h-16 sm:max-h-20"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Brandsec;