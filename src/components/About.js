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
    // console.log("ABOUT : ", props);
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
      <div className="flex flex-col text-center text-xl">
        <UserContext.Consumer>
          {({ loggedInUser }) => (
            <h1 className="font-bold text-3xl  m-4 p-4">
              Welcome to YumYard, {loggedInUser}
            </h1>
          )}
        </UserContext.Consumer>
        <h1 className="m-4 font-bold">ABOUT US</h1>
        <h3 className="p-4 mx-8">
          Our mission is to elevate the quality of life for the urban consumer
          with unparalleled convenience. Convenience is what makes us tick. It's
          what makes us get out of bed and say, "Let's do this."
        </h3>

        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {/* <User {...userDetails} /> */}
          {/* <UserClass name={"DIKSHA"} location={"DELHI"} /> */}
        </div>
      </div>
    );
  }
}

export default About;



//- WHEN CLASS IS INSTANIATED, THE CONSTRUCTOR IS CALLED
//- THEN RENDER IS CALLED
//- WHEN CBC IS MOUNTED ON THE DOM, COMPONENTDIDMOUNT() IS CALLED