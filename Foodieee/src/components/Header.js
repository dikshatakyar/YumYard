import foodiez_logo from "../../foodiez_logo.png";

const TitleLogo = () => (
  <a href="/">
    <img className="logo" src={foodiez_logo} alt="Foodiez" />
  </a>
);

const HeaderComponent = () => {
  return (
    <div className="header">
      <TitleLogo />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
