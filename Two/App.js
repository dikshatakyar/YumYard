// imported react and reactdom from nodemodule folder
import React from "react";
import ReactDOM from "react-dom/client";


const heading = React.createElement(
  "h1",
  {
    id: "title",
    key: "h1",
  },
  "heading"
);
const heading1 = React.createElement(
  "h1",
  {
    id: "title",
    key: "h2",
  },
  "heading1"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading1]
);

console.log(heading);

//trying JSX
//this is a react element
const anything = (
  <h1 id="jsx" key="div">
    This is JSX!
  </h1>
);

// root.render(anything);

//this is a functional component
const FunctionalCompo = () => (
  <>
    <h1>it is what it is.</h1>
    <h2>maybe.</h2>
  </>
);

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root

// root.render(FunctionalCompo());
// root.render(<FunctionalCompo/>);
// root.render(container);
