import React from "react";

const HomeCards = (props) => {
  const { resData } = props;

  return (
    <div className="card">
      <img
        src={resData?.image}
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