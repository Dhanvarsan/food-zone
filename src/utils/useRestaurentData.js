import { useEffect, useState } from "react";
import { RESTAURENT_API } from "../utils/service";
const restuarentData = (resId) => {
const [restauentData, setRestaurantData] = useState({});
  useEffect(() => {
    fetchRestaurentData();
  }, []);
  const fetchRestaurentData = async () => {
    const data = await fetch(RESTAURENT_API + (resId ? "/" + resId : ""));
    const json = await data.json();
    setRestaurantData(json);
  };
  return restauentData;
}
export default restuarentData;