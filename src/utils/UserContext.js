import { createContext } from "react";

const UserContext = createContext({
  Greet: "Hello",
  loggedInUser: "User!",
});

export default UserContext;
