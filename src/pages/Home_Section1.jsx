import { useContext } from "react";

import {  FaCreditCard,  FaHeadphonesSimple,  FaAngleRight,  FaMusic,  FaRegObjectUngroup,} from "react-icons/fa6";
import { FiWatch } from "react-icons/fi";
import { PiCarProfileThin } from "react-icons/pi";

import { DATA } from "../Context/Context";

import img1 from "../assets/carusel_1/imgi_4_204.jpg";
import img2 from "../assets/carusel_1/imgi_5_202.jpg";
import img3 from "../assets/carusel_1/imgi_6_194.jpg";
import img4 from "../assets/carusel_1/imgi_7_192.png";
import img5 from "../assets/carusel_1/imgi_8_190.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Autoplay  } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [img1, img2, img3, img4, img5];

function Home_Section1() {
  const { menuItems } = useContext(DATA);
  const icons = {    FaCreditCard,    FaHeadphonesSimple,    FiWatch,    FaMusic,    PiCarProfileThin,    FaRegObjectUngroup  };

  return (
    <div className="flex items-center gap-6">
      {/* sol */}
      <div className="border rounded-md text-gray-500 max-w-[300px] overflow-hidden">
        <ul className="">
          {menuItems.map((item) => {
            const Icon = icons[item.icon];
            return (
              <li
                key={item.id}
                className="flex items-center justify-between gap-2 p-4 border-b border-gray-300 cursor-pointer text-gray-700 hover:bg-gray-50"
              >
                <span
                  className={`flex items-center gap-3 text-2xl ${item.icon ? "" : "pl-9"}`}
                >
                  {Icon && <Icon className="text-xl" />}
                  <span className="hover:underline text-base">
                    {item.label}
                  </span>
                </span>
                {item.hasArrow && <FaAngleRight />}
              </li>
            );
          })}
        </ul>
      </div>
      {/* orta carusel */}
       <div className="w-full sm:w-4/5 md:w-3/5 lg:w-4/7 mx-auto">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={800}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
        className="rounded-md custom-swiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img className="w-full" src={img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

      {/* sag carusel */}
      <div></div>
    </div>
  );
}

export default Home_Section1;
