import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import DataContext from "./Context/DataContext.jsx";
import BasketContext from "./Context/BasketContext.jsx";

createRoot(document.getElementById("root")).render(
  <DataContext>
    <BasketContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BasketContext>
  </DataContext>,
);
