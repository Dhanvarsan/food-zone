import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header d-flex">
      <div>Food ~ Zone</div>
      <div className="btnSection d-flex">
        <ul className="d-flex navItems">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        <button className="CartBtn" onClick={onclick}>
          Cart
        </button>
        <button
          className="loginBtn"
          style={{ marginLeft: "10px" }}
          onClick={() => {
            btnName == "Login" ? setBtnName("LogOut") : setBtnName("Login");
          }}
        >
          {btnName}
        </button>
      </div>
    </div>
  );
};
export default Header;
