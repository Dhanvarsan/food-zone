import React, { useState } from "react";
import HomeCards from "../components/HomeCards";
import MockData from "../utils/MockData";


const HomePage = () => {
  const [listofRest , setlistofRest] = useState(MockData);
  return (
    <div className="AppContainer">
      <div className="header d-flex">
        <div>Food ~ Zone</div>
        <button className="CartBtn" onClick={onclick}>
          Cart
        </button>
      </div>
      <div className="body">
        <div className="Container">
          <button onClick={() =>{
            const sortByDistance = [...listofRest].sort((a,b) => 
              a.distanceInt - b.distanceInt
            )
            setlistofRest(sortByDistance)
          }}>Sort By Distance</button>
          <button className="refreshBtn" onClick={() => setlistofRest(MockData)}>↻</button>
          <div className="CardContainer">
            {listofRest.map((resturent) => (
              <HomeCards
                key={resturent?.id}
                resData={resturent}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;