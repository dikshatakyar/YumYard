import User from "./User";
import UserClass from "./UserClass";
import React from "react";

const userDetails = [
  {
    name: "Diksha",
    location: "Delhi",
  },
  {
    name: "Vandana",
    location: "Kerela",
  },
];

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("about constructor");
  }

  componentDidMount() {
    console.log("About Mount");
  }

  render() {
    console.log("About Render");
    return (
      <>
        <h1>ABOUT US</h1>
        <h3>
          Our mission is to elevate the quality of life for the urban consumer
          with unparalleled convenience. Convenience is what makes us tick. It's
          what makes us get out of bed and say, "Let's do this."
        </h3>

        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <User {...userDetails} />
          {userDetails.map((userData) => (
            <UserClass {...userData} key={userData.name} />
          ))}
        </div>
      </>
    );
  }
}

// const About = () => {

//   return (
//     <>
//       <h1>ABOUT US</h1>
//       <h3>
//         Our mission is to elevate the quality of life for the urban consumer
//         with unparalleled convenience. Convenience is what makes us tick. It's
//         what makes us get out of bed and say, "Let's do this."
//       </h3>

//       <div style={{ display: "flex", justifyContent: "space-around" }}>
//         <User {...userDetails} />
//         <UserClass {...userDetails} />
//       </div>
//     </>
//   );
// };

export default About;
