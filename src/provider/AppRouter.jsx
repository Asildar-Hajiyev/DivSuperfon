import { Route, Routes } from "react-router-dom";
import Main from "../components/Main";
import StoreLocation from "../pages/StoreLocation";
import Corporate from "../pages/Corporate";

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/storelocation" element={<StoreLocation/>}/>
        <Route path="/corporate" element={<Corporate/>}/>
      </Routes>
    </>
  );
}

export default AppRouter;
