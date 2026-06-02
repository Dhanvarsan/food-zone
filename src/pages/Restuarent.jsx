import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURENT_API } from "../utils/service";
import useRestaurentData from "../utils/useRestaurentData";

const Restaurent = () => {
  const { resId } = useParams();
  const restauentData = useRestaurentData(resId);
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
