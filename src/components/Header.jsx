import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import userContext from "../utils/UserContext";


const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const  {user} = useContext(userContext);
  return (
    <div className="header d-flex">
      <Link to="/" className="logo">
        <div>Food ~ Zone</div>
      </Link>
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
        <span>{user}</span>
      </div>
    </div>
  );
};
export default Header;
