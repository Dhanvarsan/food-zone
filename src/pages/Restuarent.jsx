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
        <h3>Distance: {restauentData?.distance}</h3>
        <ul className="menuItems d-flex">
          {restauentData?.menuItems?.map((items) => {
            return (
              <div key={items.id} className="menu-item d-flex">
                <div className="d-flex" style={{ gap: "20px" }}>
                {items.image && (
                  <img
                    className="menu-item-image"
                    src={items.image}
                      alt={items.item}
                    />
                  )}
                  <span className="menu-item-name">{items.item} - {items.price}/-</span>
                  </div>
                <button className="MenuCartBtn">Add to Cart</button>
                </div>
            );
          })}
        </ul>
      </div>
    )
  );
};
export default Restaurent;
