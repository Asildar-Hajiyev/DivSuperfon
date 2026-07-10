import { useEffect, useState } from "react";
import { DATA } from "./Context";
import {
  getData,
  getData3,
  getMenuItems,
  getNavLinks,
  getStoreData,
} from "../service/api";

function DataContext({ children }) {
  const [user, setUser] = useState([]);
  const [user3, setUser3] = useState([]);
  const [navLinks, setNavLinks] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [storeLocation, setStoreLocation] = useState([]);

  useEffect(() => {
    getData().then((res) => setUser(res));
    getData3().then((res3) => setUser3(res3));
    getNavLinks().then((navLinks) => setNavLinks(navLinks));
    getMenuItems().then((menuItems) => setMenuItems(menuItems));
    getStoreData().then((storeLocation) => setStoreLocation(storeLocation));

  }, []);
  return (
    <DATA.Provider
      value={{ user,user3,navLinks, menuItems, storeLocation  }}
    >
      {children}
    </DATA.Provider>
  );
}

export default DataContext;
