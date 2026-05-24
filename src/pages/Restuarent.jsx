import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Restaurent = () => {
  const { resId } = useParams();
  const [restauentData, setRestaurantData] = useState({});
  useEffect(() => {
    fetchRestaurentData();
  }, []);
  const fetchRestaurentData = async () => {
    const data = await fetch(
      "https://my-json-server.typicode.com/Dhanvarsan/food-zone/restaurants/" +
        resId,
    );
    const json = await data.json();
    setRestaurantData(json);
  };
  return (
    restauentData && (
      <div className="restaurentContainer">
        <h1>{restauentData?.restaurantName}</h1>
        <h3>{restauentData?.distance}</h3>
        <div className="menuItems">
          {restauentData?.menuItems?.map((items) => {
            return (
              <ul>
                <li>
                  {items.item} - {items.price}
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    )
  );
};
export default Restaurent;
