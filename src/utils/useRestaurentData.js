import { useEffect, useState } from "react";
import { RESTAURENT_API } from "../utils/service";
const restuarentData = () => {
const [restauentData, setRestaurantData] = useState({});
  useEffect(() => {
    fetchRestaurentData();
  }, []);
  const fetchRestaurentData = async () => {
    const data = await fetch(RESTAURENT_API);
    const json = await data.json();
    setRestaurantData(json.restaurants);
  }
  return restauentData;
}
export default restuarentData;