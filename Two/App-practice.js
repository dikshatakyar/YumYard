import React from "react";
import ReactDOM from "react-dom/client";

//functional component
const Header = () => {
  return (
    <div className="title">
      <h1>things fall down</h1>
      <h2>we fall down</h2>
      <h3>everything falls down, and never get up.</h3>
    </div>
  );
};

//React Element
const Header2 = (
  <div className="title">
    <h1>one</h1>
    <h2>two</h2>
    <h3>three</h3>
  </div>
);

//composition of component

const Coc = () => (
  <>
    <Header />
    {Header2}
    <h1>this is composition of component</h1>
    <h2>here i will add another component</h2>
  </>
);

const element = <h1>Hello, world</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Coc/>);
