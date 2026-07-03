import { useEffect, useState } from "react";
import { DATA } from "./Context";
import { getData, getMenuItems, getNavLinks } from "../service/api";

function DataContext({ children }) {
  const [user, setUser] = useState([]);
  const [navLinks, setNavLinks] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    getData().then((res) => setUser(res));
    getNavLinks().then((navLinks) => setNavLinks(navLinks));
    getMenuItems().then((menuItems) => setMenuItems(menuItems));
  }, []);
  return (
    <DATA.Provider value={{ user, navLinks, menuItems }}>
      {children}
    </DATA.Provider>
  );
}

export default DataContext;
