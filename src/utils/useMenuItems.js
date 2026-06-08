import { useEffect, useState } from "react";
const useMenuItems = (resId) => {
    const [menuItems, setMenuItems] = useState({});
    useEffect(() => {
        fetchMenuItems();
     },[resId]);
  const fetchMenuItems = async () => {
    const apiPrefix = "https://raw.githubusercontent.com/Dhanvarsan/food-zone/main/data/menu-";
    const data = await fetch(`${apiPrefix}${resId}.json`);
    const json = await data.json();
    console.log("menuItems json data", json);
    setMenuItems(json.categories);
  }
  return menuItems;
}
export default useMenuItems;