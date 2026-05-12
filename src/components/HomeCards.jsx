import React from "react";

const HomeCards = (props) => {
  const { resData } = props;

  return (
    <div className="card">
      <img
        src="https://thumbs.dreamstime.com/b/colorful-planet-cute-food-21932075.jpg?w=100"
        alt="not-renders"
      />
      <h3>{resData.restaurantName}</h3>
      <div>
        {resData?.distance} ~ {resData?.deliveryTime}
      </div>
    </div>
  );
};

export default HomeCards;