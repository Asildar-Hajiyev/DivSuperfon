import { useContext, useEffect, useRef, useState } from "react";
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
import { CiShoppingCart, CiHeart, CiUser } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { FiUser, FiWatch } from "react-icons/fi";
import { PiCarProfileThin, PiChatTextLight } from "react-icons/pi";

import { GiScales } from "react-icons/gi";
import { LuHouse } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";

import { Link, NavLink } from "react-router-dom";
import { DATA, BASKET, WISHLIST } from "../Context/Context";
import Catalog from "./Catalog";

const ICONS = {
  FaCreditCard,
  FaHeadphonesSimple,
  FiWatch,
  FaMusic,
  PiCarProfileThin,
  FaRegObjectUngroup,
};

const LANGS = ["AZ", "RU"];

function LangSelector({ selectedLang, onSelect, className = "" }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={wrapperRef}
      onClick={() => setOpen((o) => !o)}
      className={`relative flex items-center gap-1 cursor-pointer py-1 ${className}`}
    >
      <IoLanguageOutline />
      <span className="flex items-center text-xs gap-1">
        {selectedLang}
        <FaAngleDown
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </span>

      {open && (
        <div className="absolute top-8 left-0 bg-white border rounded shadow-md z-10 min-w-[60px]">
          {LANGS.map((lang) => (
            <div
              key={lang}
              onClick={(e) => {
                e.stopPropagation();
                onSelect(lang);
                setOpen(false);
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.stopPropagation();
                  onSelect(lang);
                  setOpen(false);
                }
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
  );
}

const NAV_ITEMS = [
  { to: "/", label: "Əsas səhifə", Icon: LuHouse },
  { to: "/favorite", label: "İstəklər", Icon: FaRegHeart },
  { to: "/chat", label: "Çat", Icon: PiChatTextLight },
  { to: "/compare", label: "Müqayisə", Icon: GiScales },
  { to: "/login", label: "Hesab", Icon: CiUser },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("AZ");
  const [openInput, setOpeninput] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  /* Əgər navLinks və ya menuItems yoxdusa underfined etme bos [] array qaytar */
  const { navLinks = [], menuItems = [] } = useContext(DATA);
  const { sebet = [] } = useContext(BASKET);
  const cartCount = sebet.length;
  const { wistList = [] } = useContext(WISHLIST);
  const heartCount = wistList.length;
  const { finalPrice } = useContext(BASKET);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
        setOpeninput(false);
      }
    };

    const handleScroll = () => {
      if (headerRef.current && !isFixed) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
      setIsFixed(window.scrollY > 65);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFixed]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="relative">
        <div className="border-b border-gray-200 py-4 px-4 flex items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-sm md:text-base">
            <Link
              to="/storelocation"
              className="hover:underline font-semibold cursor-pointer"
            >
              Mağazalarımız
            </Link>
            <Link
              to="/corporate"
              className="hover:underline font-semibold cursor-pointer"
            >
              Korporativ satış
            </Link>
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

              <LangSelector
                selectedLang={selectedLang}
                onSelect={setSelectedLang}
                className="border-r border-gray-200 px-3"
              />

              {/* Hesab */}
              <div className="flex items-center gap-2 px-3 cursor-pointer">
                <FiUser className="text-2xl" />
                <Link to="/login" className="flex flex-col text-xs">
                  <span className="font-semibold text-gray-400">Daxil ol</span>
                  <span className="font-semibold">Hesab</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {isFixed && <div style={{ height: headerHeight }} aria-hidden="true" />}

        <div
          ref={headerRef}
          className={`flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200 py-5 px-6 gap-4 bg-white transition-all duration-300 ${
            isFixed ? "fixed top-0 left-0 w-full z-50 shadow-md" : "relative"
          }`}
        >
          {/* Sol: Hamburger, Logo ve mobil: search, basket */}
          <div className="flex items-center justify-between md:justify-start gap-2 sm:gap-4 md:w-auto shrink-0">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex md:hidden cursor-pointer p-1 -m-1"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
              >
                {menuOpen ? (
                  <IoClose className="text-2xl sm:text-3xl" />
                ) : (
                  <FaBars className="text-2xl sm:text-3xl" />
                )}
              </button>

              <Link to="/">
                <img
                  className="w-[120px] sm:w-[160px] md:w-[180px] lg:w-[220px] h-auto"
                  src={logo}
                  alt="Logo"
                />
              </Link>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 md:hidden">
              <button
                onClick={() => setOpeninput(!openInput)}
                className="p-1 -m-1 cursor-pointer"
                aria-label="Search"
              >
                <IoSearchOutline className="text-3xl sm:text-4xl" />
              </button>
              {/* mobile basketim */}
              <Link to="/basket" className="p-1 -m-1">
                <span className="relative inline-flex">
                  <CiShoppingCart className="text-3xl sm:text-4xl" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-2 min-w-[16px] h-[16px] px-[3px] rounded-full bg-red-500 text-white text-[9px] font-semibold flex items-center justify-center leading-none">
                      {cartCount > 99 ? "99+" : cartCount}
                    </span>
                  )}
                </span>
              </Link>
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-4 w-full">
            {/* Kataloq */}
            <Catalog />

            {/* Axtarış */}
            <div className="border flex items-center px-4 py-3 rounded-sm border-gray-400 flex-1">
              <input
                type="text"
                placeholder="Axtarış"
                id="srch"
                className="focus:outline-none w-full text-base"
              />
              <label htmlFor="srch">
                <IoSearchOutline className="text-2xl text-gray-400 cursor-pointer" />
              </label>
            </div>
            {/* Tərəzi */}
            <div className="shrink-0">
              <GiScales className="text-4xl" />
            </div>
            {/* Ürək */}
            <Link to="/favorite" className="shrink-0">
              <span className="relative inline-flex">
                <CiHeart className="text-4xl" />

                {heartCount > 0 && (
                  <span className="absolute -top-1 -right-2 min-w-[16px] h-[16px] px-[3px] rounded-full bg-red-500 text-white text-[9px] font-semibold flex items-center justify-center leading-none">
                    {heartCount > 99 ? "99+" : heartCount}
                  </span>
                )}
              </span>
            </Link>

            {/* Səbət */}
            <Link
              to="/basket"
              className="flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <span className="relative inline-flex">
                <CiShoppingCart className="text-4xl" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-2 min-w-[16px] h-[16px] px-[3px] rounded-full bg-red-500 text-white text-[9px] font-semibold flex items-center justify-center leading-none">
                    {cartCount > 99 ? "99+" : cartCount}
                  </span>
                )}
              </span>
              <div className="flex flex-col">
                <span className="text-gray-400 text-sm">Məbləğ</span>
                <span className="text-base font-medium">
                  {(Math.round(finalPrice) * 100) / 100} ₼
                </span>
              </div>
            </Link>
          </div>

          {/* Yenilənmiş Mobil Axtarış Sahəsi */}
          {openInput && (
            <div className="absolute top-full left-0 bg-white w-full px-6 py-4 border-b flex items-center gap-3 shadow-md">
              <div className="flex items-center bg-gray-100 w-full px-3 py-2 rounded-md border border-gray-200">
                <input
                  type="text"
                  placeholder="Axtarış..."
                  className="w-full bg-transparent focus:outline-none text-base"
                  autoFocus
                />
                <IoSearchOutline className="text-2xl text-gray-400" />
              </div>
              <button
                onClick={() => setOpeninput(false)}
                className="text-3xl text-gray-500 hover:text-black cursor-pointer p-1"
              >
                <IoClose />
              </button>
            </div>
          )}
        </div>
        {/* hamburger */}
        <div
          className={`fixed top-0 left-0 h-full w-[400px] max-w-full z-50 bg-white shadow-lg transition-transform duration-300 ease-in-out overflow-y-auto ${
              menuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          {/* ust hisse */}
          <div className="flex items-center justify-between p-4 bg-gray-100 border-b border-gray-300">
            <img src={logo} className="w-[180px]" alt="" />
            {/* Dil seçici */}
            <div className="flex items-center gap-1">
              <LangSelector
                selectedLang={selectedLang}
                onSelect={setSelectedLang}
                className="px-3"
              />
              <IoClose
                onClick={() => setMenuOpen(false)}
                className="text-4xl cursor-pointer"
              />
            </div>
          </div>

          <ul className="flex flex-col">
            {menuItems.map((item) => {
              const Icon = ICONS[item.icon];
              return (
                <li
                  key={item.id}
                  className="flex items-center justify-between gap-2 p-3 border-b border-gray-300 cursor-pointer text-gray-700"
                >
                  <span
                    className={`flex items-center gap-3 ${item.icon ? "" : "pl-9"}`}
                  >
                    {Icon && <Icon className="text-xl" />}
                    <span className="hover:underline">{item.label}</span>
                  </span>
                  {item.hasArrow && <FaAngleRight />}
                </li>
              );
            })}
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

      {/* Asagi menu */}
      <div
        className="fixed bottom-0 left-0 w-full border-t bg-white z-40 md:hidden border-gray-300 shadow-[0_-2px_8px_rgba(0,0,0,0.08)]"
        // style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      >
        <ul className="flex items-stretch justify-between px-1">
          {NAV_ITEMS.map(({ to, label, Icon }) => (
            <li key={to} className="flex-1">
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `flex flex-col items-center justify-center gap-1 py-2 px-1 text-[11px] leading-tight transition-colors ${
                    isActive
                      ? "text-red-500 border-t border-red-500"
                      : "text-gray-500"
                  }`
                }
              >
                <Icon className="text-xl shrink-0" />
                <span className="text-center truncate w-full">{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Header;
