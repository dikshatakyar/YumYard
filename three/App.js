import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "./logo.png";
import UserIcon from "./userIcon.png";
import "./Styles.css";

//Header Component from scratch

const Logos = () => <img className="img" src={Logo} alt="img" />;

const User = () => <img className="img" src={UserIcon} alt="user" />;

const HeaderComponent = () => (
  <div className="Header">
    <Logos />
    <input
      style={{ width: "100%", backgroundColor: "rgb(159, 217, 255)" }}
      placeholder="enter text"
    />
    <User />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
