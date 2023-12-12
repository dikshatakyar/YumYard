import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "../Style.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Login from "./components/Login";
import { lazy, Suspense, useState } from "react";
import UserContext from "./utils/UserContext";

const Grocery = lazy(() => import("./components/Grocery"));

const Foodiez = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Authentication : making an API call and sending username & pass
    const data = {
      greet: "Hello, ",
      Name: "Diksha Takyar",
    };
    setUsername(data.greet + data.Name);
  }, []);

  return (
    <>
      <UserContext.Provider value={{ loggedInUser: username, setUsername }}>
        <Header />
        {/* <Body /> */}
        <Outlet />
      </UserContext.Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Foodiez />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
