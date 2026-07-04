import { Route, Routes } from "react-router-dom";
import StoreLocation from "../pages/StoreLocation";
import Corporate from "../pages/Corporate";
import Basket from "../pages/Basket";
import Favorite from "../pages/Favorite";
import Home from "../pages/Home";
import Card from "../components/Card";
import Main from "../pages/Main";

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/storelocation" element={<StoreLocation/>}/>
        <Route path="/corporate" element={<Corporate/>}/>
        <Route path="/basket" element={<Basket/>}/>
        <Route path="/favorite" element={<Favorite/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/card" element={<Card/>}/>
      </Routes>
    </>
  );
}

export default AppRouter;
