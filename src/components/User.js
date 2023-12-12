import { useState } from "react";

const User = (props) => {
  const [experience, setExperience] = useState(1);
  const [degreeDuration, setDegreeDuration] = useState(3);
  return (
    <div className="user">
      <h2>Name : {props.name} (fxn)</h2>
      <h3>Location : {props.location}</h3>
      <h3>Experience : {experience}</h3>
      <h3>Duration of Degree : {degreeDuration}</h3>
    </div>
  );
};

export default User;
