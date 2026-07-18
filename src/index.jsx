import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import DataContext from "./Context/DataContext.jsx";
import BasketContext from "./Context/BasketContext.jsx";
import WishlistContext from "./Context/WishlistContext.jsx";
import CorpareContext from "./Context/CorpareContext.jsx";

createRoot(document.getElementById("root")).render(
  <CorpareContext>
    <WishlistContext>
      <DataContext>
        <BasketContext>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </BasketContext>
      </DataContext>
    </WishlistContext>
  </CorpareContext>,
);
