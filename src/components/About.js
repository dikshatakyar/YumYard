import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "/src/utils/UserContext";

const userDetails = {
  name: "Diksha",
  location: "Delhi",
};

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("about constructor");
  }

  componentDidMount() {
    // console.log("About Mount");
  }

  componentWillUnmount() {
    // console.log("Component WILL UNMOUNT !");
  }

  render() {
    // console.log("About Render");
    return (
      <>
        <UserContext.Consumer>
          {({loggedInUser}) => <h1 className="font-bold text-xl text-center m-4 p-4">{loggedInUser}</h1>}
        </UserContext.Consumer>
        <h1>ABOUT US</h1>
        <h3>
          Our mission is to elevate the quality of life for the urban consumer
          with unparalleled convenience. Convenience is what makes us tick. It's
          what makes us get out of bed and say, "Let's do this."
        </h3>

        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {/* <User {...userDetails} /> */}
          <UserClass name={"DIKSHA"} location={"DELHI"} />
        </div>
      </>
    );
  }
}

export default About;
