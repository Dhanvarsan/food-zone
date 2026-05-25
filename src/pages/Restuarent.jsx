import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURENT_API } from "../utils/service";

const Restaurent = () => {
  const { resId } = useParams();
  const [restauentData, setRestaurantData] = useState({});
  useEffect(() => {
    fetchRestaurentData();
  }, []);
  const fetchRestaurentData = async () => {
    const data = await fetch(RESTAURENT_API + "/" + resId);
    const json = await data.json();
    setRestaurantData(json);
  };
  console.log(restauentData.menuItems,'ll')
  return (
    restauentData && (
      <div className="restaurentContainer">
        <h1>{restauentData?.restaurantName}</h1>
        <h3>{restauentData?.distance}</h3>
        <ul className="menuItems">
          {restauentData?.menuItems?.map((items) => {
            return (
              <li key={items.id} className="menu-item">
                {items.item} - {items.price}
              </li>
            );
          })}
        </ul>
      </div>
    )
  );
};
export default Restaurent;
