import { useEffect, useState } from "react";
import { DATA } from "./Context";
import {
  getData,
  getMenuItems,
  getNavLinks,
  getStoreData,
} from "../service/api";

function DataContext({ children }) {
  const [user, setUser] = useState([]);
  const [navLinks, setNavLinks] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [storeLocation, setStoreLocation] = useState([]);

  useEffect(() => {
    getData().then((res) => setUser(res));
    getNavLinks().then((navLinks) => setNavLinks(navLinks));
    getMenuItems().then((menuItems) => setMenuItems(menuItems));
    getStoreData().then((storeLocation) => setStoreLocation(storeLocation));

  }, []);
  return (
    <DATA.Provider
      value={{ user, navLinks, menuItems, storeLocation }}
    >
      {children}
    </DATA.Provider>
  );
}

export default DataContext;
