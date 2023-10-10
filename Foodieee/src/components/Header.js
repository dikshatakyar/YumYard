import foodiez_logo from "../../Assets/foodiez_logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export const TitleLogo = () => (
  <a href="/">
    <img className="logo" src={foodiez_logo} alt="Foodiez" />
  </a>
);

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <TitleLogo />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <button
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
