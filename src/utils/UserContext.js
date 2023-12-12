import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Hello, User!",
});

export default UserContext;
