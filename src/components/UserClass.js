import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);
    console.log("USERCLASS : ", props);

    // console.log(this.props.name + " constructor");
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Cloud9",
      },
    };
  }

  async componentDidMount() {
    // console.log(this.props.name + " MOUNT");
    const userData = await fetch("https://api.github.com/users/dikshatakyar");
    const jsonData = await userData.json();

    this.setState({
      userInfo: jsonData,
    });

    console.log("userInfo :", jsonData);
  }

  render() {
    console.log(this.props.name + " Render");
    const { name, location, avatar_url } = this.state.userInfo;
    // debugger;
    return (
      <div className="user">
        <img src={avatar_url} />
        <h2>Name : {name} (class)</h2>
        <h3>Location : {location}</h3>
      </div>
    );
  }
}

export default UserClass;
