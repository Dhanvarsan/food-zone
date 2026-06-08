import React from "react";

const HomeCards = (props) => {
  const { resData } = props;
  return (
    <div className="card">
      {/* {resData.promoted ? <label>Promoted</label> : null} usual approach what i do */}
      <img src={resData?.image} alt="not-renders" />
      <h3>{resData.restaurantName}</h3>
      <div>
        {resData?.distance} ~ {resData?.deliveryTime}
      </div>
    </div>
  );
};
// higher order component to wrap the HomeCards component and add a promoted label
//  - this is to avoid code duplication, can be reused for any other card component in future if needed
export const HomeCardPromoted = (Component) => {
  return (props) => {
    return (
      <div className="promoted">
        <label>Promoted</label>
        <Component {...props} />
      </div>
    );
  };
};

export default HomeCards;
