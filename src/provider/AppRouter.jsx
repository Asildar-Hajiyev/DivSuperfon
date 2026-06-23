import { Route, Routes } from "react-router-dom";
import Main from "../components/Main";

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main/>}/>
      </Routes>
    </>
  );
}

export default AppRouter;
