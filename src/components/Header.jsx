import { useEffect, useState } from "react";
import logo from "../assets/logo_new.svg";
import {
  FaBars,
  FaAngleDown,
  FaCreditCard,
  FaHeadphonesSimple,
  FaAngleRight,
  FaMusic,
  FaRegObjectUngroup,
} from "react-icons/fa6";
import { IoSearchOutline, IoLanguageOutline, IoClose } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { FiUser, FiWatch } from "react-icons/fi";
import { PiCarProfileThin } from "react-icons/pi";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("AZ");

  const menuItems = [
    {
      id: 1,
      icon: <FaCreditCard className="text-2xl" />,
      label: "Hədiyyə kartları",
      hasArrow: false,
    },
    {
      id: 2,
      icon: <FaHeadphonesSimple className="text-2xl" />,
      label: "Telefon Aksesuarları",
      hasArrow: true,
    },
    {
      id: 3,
      icon: <FiWatch className="text-2xl" />,
      label: "Saatlar",
      hasArrow: true,
    },
    {
      id: 4,
      icon: <FaMusic className="text-2xl" />,
      label: "Audio və TV aksesuarlar",
      hasArrow: true,
    },
    {
      id: 5,
      icon: <PiCarProfileThin className="text-2xl" />,
      label: "Avtomobil aksesuarları",
      hasArrow: true,
    },
    {
      id: 6,
      icon: <FaRegObjectUngroup className="text-2xl" />,
      label: "Kiçik məişət texnikası",
      hasArrow: true,
    },
    {
      id: 7,
      icon: <FiWatch className="text-2xl" />,
      label: "Digər",
      hasArrow: true,
    },
    {
      id: 8,
      label: "Brendlər",
    },
  ];
  const navLinks = [
    { id: 1, label: "Kampaniyalar" },
    { id: 2, label: "Haqqımızda" },
    { id: 3, label: "Mağazalarımız" },
    { id: 4, label: "Karyera" },
    { id: 5, label: "Əlaqə" },
  ];
  useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setMenuOpen(false);
    }
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);
  return (
    <>
      <nav className="relative">
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

        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200 p-4">
          {/* Sol/Üst tərəf: Hamburger və Logo */}
          <div className="flex items-center justify-between md:justify-start gap-4 w-full md:w-auto">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex md:hidden cursor-pointer"
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

          {/* Böyük ekranlar (Desktop) üçün ikonlar */}
          <div className="hidden md:flex items-center gap-3">
            
            <IoSearchOutline className="text-3xl" />
            <CiShoppingCart className="text-3xl" />
          </div>
        </div>
        <div
          className={`fixed top-0 left-0 h-full w-[400px] z-50 bg-white shadow-lg transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          {/* ust hisse */}
          <div className="flex items-center justify-between p-4 bg-gray-100 border-b border-gray-300">
            <img src={logo} className="w-[180px]" alt="" />
            {/* Dil seçici */}
            <div className="flex items-center gap-1">
              <div
                onClick={() => setLangOpen(!langOpen)}
                className="relative flex items-center gap-1 px-3 cursor-pointer py-1"
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
              <IoClose
                onClick={() => setMenuOpen(false)}
                className="text-4xl cursor-pointer"
              />
            </div>
          </div>

          <ul className="flex flex-col">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between gap-2 p-3 border-b border-gray-300 cursor-pointer text-gray-700"
              >
                <span
                  className={`flex items-center gap-3 ${item.icon ? "" : "pl-9"}`}
                >
                  {item.icon}
                  <span className="hover:underline">{item.label}</span>
                </span>
                {item.hasArrow && <FaAngleRight />}
              </li>
            ))}
          </ul>
          <div className="flex items-start flex-col gap-3 p-3">
            {navLinks.map((link) => (
              <span key={link.id} className="cursor-pointer hover:underline">
                {link.label}
              </span>
            ))}
          </div>
        </div>

        {/* Qaranlıq arxa fon */}
        {menuOpen && (
          <div
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-black/40 z-40"
          />
        )}
      </nav>
    </>
  );
}

export default Header;
