import React, { useEffect, useState } from "react";
import HomeCardSection from "../components/HomeCardSection";

const HomePage = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="AppContainer">
      <div className="header d-flex">
        <div>Food ~ Zone</div>
        <div className="btnSection">
          <button className="CartBtn" onClick={onclick}>
            Cart
          </button>
          <button
            className="loginBtn"
            style={{ "marginLeft": "10px" }}
            onClick={() => {
              btnName == "Login" ? setBtnName('LogOut') : setBtnName('Login') 
            }}
          >
            {btnName}
          </button>
        </div>
      </div>
      <div className="body">
        <HomeCardSection />
      </div>
    </div>
  );
};

export default HomePage;
