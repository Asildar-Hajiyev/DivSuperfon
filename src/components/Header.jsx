import { useState } from "react";
import logo from "../assets/logo_new.svg";
import { FaBars, FaAngleDown } from "react-icons/fa6";
import { IoSearchOutline, IoLanguageOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { FiUser } from "react-icons/fi";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("AZ");
  return (
    <>
      <nav className="">
        <div className="border-b border-gray-200 py-4 px-4 flex items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-sm md:text-base">
            <div className="hover:underline font-semibold cursor-pointer">
              Mağazalarımız
            </div>
            <div className="hover:underline font-semibold cursor-pointer">
              Korporativ satış
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Kampaniyalar */}
            <div className="border-r border-gray-200 pr-3">
              <div className="border px-3 py-1.5 rounded-md border-orange-500 hover:bg-orange-500 font-semibold hover:text-white transition-all duration-300 text-sm whitespace-nowrap cursor-pointer">
                Kampaniyalar
              </div>
            </div>

            {/* Desktop: Telefon, Dil, Hesab */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center gap-2 border-r border-gray-200 px-3">
                <BsTelephone />
                <span className="text-sm whitespace-nowrap">
                  +99451 205 88 88
                </span>
              </div>

              {/* Dil seçici */}
              <div
                onClick={() => setLangOpen(!langOpen)}
                className="relative flex items-center gap-1 border-r border-gray-200 px-3 cursor-pointer py-1"
              >
                <IoLanguageOutline />
                <span className="flex items-center text-xs gap-1">
                  {selectedLang}
                  <FaAngleDown
                    className={`transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
                  />
                </span>

                {langOpen && (
                  <div className="absolute top-8 left-0 bg-white border rounded shadow-md z-10 min-w-[60px]">
                    {["AZ", "RU"].map((lang) => (
                      <div
                        key={lang}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedLang(lang);
                          setLangOpen(false);
                        }}
                        className={`px-4 py-2 text-xs hover:bg-gray-100 cursor-pointer ${
                          selectedLang === lang ? "font-bold" : ""
                        }`}
                      >
                        {lang}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Hesab */}
              <div className="flex items-center gap-2 px-3 cursor-pointer">
                <FiUser className="text-2xl" />
                <div className="flex flex-col text-xs">
                  <span className="font-semibold text-gray-400">Daxil ol</span>
                  <span className="font-semibold">Hesab</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200 p-4">
          {/* Sol/Üst tərəf: Hamburger və Logo */}
          <div className="flex items-center justify-between md:justify-start gap-4 w-full md:w-auto">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex md:hidden"
              >
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
            className={`${menuOpen ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0 overflow-hidden md:max-h-none md:opacity-100"} transition-all duration-300 ease-in-out flex md:hidden flex-col md:flex-row gap-4 w-full md:w-auto md:mt-0 `}
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
