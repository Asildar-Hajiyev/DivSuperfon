import { useState } from "react";
import logo from "../assets/logo_new.svg";
import { FaBars, FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { IoSearchOutline, IoLanguageOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { FiUser } from "react-icons/fi";

function Header() {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  return (
    <>
      <nav className="">
        <div className="border-b border-gray-200 py-6 px-4 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-sm md:text-base">
            <div className="hover:underline font-semibold">Mağazalarımız</div>

            <div className="hover:underline font-semibold">Korporativ satış</div>
          </div>

          <div className="flex items-center gap-4 md:gap-3">
            <div className="md:border-r border-gray-200 px-2">
              <div className="border px-3 md:px-4 py-2 rounded-md border-orange-500 hover:bg-orange-500 font-semibold hover:text-white transition-all duration-300 text-sm md:text-base whitespace-nowrap">
                Kampaniyalar
              </div>
            </div>

            <div className="hidden md:flex">
              <div className="flex items-center gap-2 border-r border-gray-200 px-2">
                <BsTelephone />

                <span className="text-sm whitespace-nowrap">
                  +99451 205 88 88
                </span>
              </div>

              <div
                onClick={() => setHover(!hover)}
                className="relative flex items-center gap-2 border-r border-gray-200 px-2 cursor-pointer"
              >
                <IoLanguageOutline />

                <span className="flex items-center text-xs">
                  AZ
                  {hover ? <FaAngleDown /> : <FaAngleUp />}
                </span>

                {hover ? (
                  ""
                ) : (
                  <div className="absolute top-6 left-2 border rounded-sm bg-white px-4 py-1 shadow-sm z-10">
                    <span className="flex items-center text-xs cursor-pointer">
                      RU
                    </span>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2 px-2">
                <FiUser className="text-3xl" />

                <div className="flex items-start flex-col text-xs">
                  <div>
                    <span className="font-semibold text-gray-400">
                      Daxil ol
                    </span>
                  </div>

                  <div>
                    <span className="font-semibold">Hesab</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200 p-4">
          {/* Sol/Üst tərəf: Hamburger və Logo */}
          <div className="flex items-center justify-between md:justify-start gap-4 w-full md:w-auto">
            <div className="flex items-center gap-2">
              <button onClick={() => setOpen(!open)} className="flex md:hidden">
                <FaBars className="text-2xl" />
              </button>

              <img className="w-[200px]" src={logo} alt="Logo" />
            </div>

            {/* Sağ tərəfdəki ikonlar mobildə loqo ilə eyni sətirdə görünsün deyə bura köçürüldü (vizual olaraq) */}
            <div className="flex items-center gap-3 md:hidden">
              <IoSearchOutline className="text-3xl" />
              <CiShoppingCart className="text-3xl" />
            </div>
          </div>

          {/* Menyu Linkləri - Animasiyanın işləməsi üçün şərt class səviyyəsinə endirildi */}
          <ul
            className={`${open ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0 overflow-hidden md:max-h-none md:opacity-100"} transition-all duration-300 ease-in-out flex md:hidden flex-col md:flex-row gap-4 w-full md:w-auto md:mt-0 `}
          >
            <li>
              <div>1</div>
            </li>
            <li>
              <div>2</div>
            </li>
            <li>
              <div>3</div>
            </li>
          </ul>

          {/* Böyük ekranlar (Desktop) üçün ikonlar */}
          <div className="hidden md:flex items-center gap-3">
            <IoSearchOutline className="text-3xl" />
            <CiShoppingCart className="text-3xl" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
