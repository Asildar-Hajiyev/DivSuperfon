import { Route, Routes } from "react-router-dom";
import StoreLocation from "../pages/StoreLocation";
import Corporate from "../pages/Corporate";
import Basket from "../pages/Basket";
import Favorite from "../pages/Favorite";
import Card from "../components/Card";
import Main from "../pages/Main";
import Home_Section3 from "../pages/Home_Section3";
import Home_Section1 from "../pages/Home_Section1";
import Details from "../components/Details";

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/storelocation" element={<StoreLocation/>}/>
        <Route path="/corporate" element={<Corporate/>}/>
        <Route path="/basket" element={<Basket/>}/>
        <Route path="/favorite" element={<Favorite/>}/>
        <Route path="/home_section1" element={<Home_Section1/>}/>
        <Route path="/home_section3" element={<Home_Section3/>}/>
        <Route path="/card" element={<Card/>}/>
        <Route path="/details/:id" element={<Details/>}/>
      </Routes>
    </>
  );
}

export default AppRouter;
