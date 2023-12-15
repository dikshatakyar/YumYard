import YumYard_logo from "../../Assets/YumYard_logo.png";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

export const TitleLogo = () => (
  <a href="/">
    <img className="max-w-xs" src={YumYard_logo} alt="Foodiez" />
  </a>
);

const Header = () => {
  const { loggedInUser, Greet } = useContext(UserContext);
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="flex justify-between text-base bg-cyan-200 shadow-lg">
      <TitleLogo />
      <div className="flex items-center">
        <ul className="flex flex-row items-center p-4 m-4 text-xl">
          <li className="px-4">
            <Link className="res-link" to="/">
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link className="res-link" to="/about">
              About us
            </Link>
          </li>
          <li className="px-4">
            <Link className="res-link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="px-4">
            <Link className="res-link" to="/grocery">
              Grocery
            </Link>
          </li>
          <li className="px-4">Cart</li>

          <button
            onClick={() => {
              btnName === "Login "
                ? setBtnName("Logout ")
                : setBtnName("Login ");
            }}
          >
            <Link className="res-link" to="/login">
              {btnName}
            </Link>
          </button>
          <li className="px-4 font-semibold"> {Greet + ", " + loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
