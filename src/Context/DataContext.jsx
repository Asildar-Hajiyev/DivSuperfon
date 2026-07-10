import { useEffect, useState } from "react";
import { DATA } from "./Context";
import {
  getData,
  getData2,
  getMenuItems,
  getNavLinks,
  getStoreData,
} from "../service/api";

function DataContext({ children }) {
  const [user, setUser] = useState([]);
  const [user2, setUser2] = useState([]);
  const [navLinks, setNavLinks] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [storeLocation, setStoreLocation] = useState([]);

  useEffect(() => {
    getData().then((res) => setUser(res));
    getData2().then((res2) => setUser2(res2));
    getNavLinks().then((navLinks) => setNavLinks(navLinks));
    getMenuItems().then((menuItems) => setMenuItems(menuItems));
    getStoreData().then((storeLocation) => setStoreLocation(storeLocation));

  }, []);
  return (
    <DATA.Provider
      value={{ user, user2,navLinks, menuItems, storeLocation }}
    >
      {children}
    </DATA.Provider>
  );
}

export default DataContext;
