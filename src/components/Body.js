import RestaurantCard, { isRestaurantOpened } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import NoResult from "./NoResult";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const getTopRated = (listofRestaurants) => {
  // console.log("getTopRated triggered");
  return listofRestaurants.filter(
    (restaurant) => restaurant.info.avgRating > 4.0
  );
};

const Body = () => {
  const topRated = "TOP RATED RESTAURANTS";
  const seeAllRes = "SEE ALL RESTAURANTS";

  const [searchInput, setSearchInput] = useState(""); //state variable
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [btnName, setBtnName] = useState(topRated);
  //when setListofRestaurants will be called, it will find the diff and do reconcillation
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [resultsFound, setResultsFound] = useState(true);
  const onlineStatus = useOnlineStatus();
  const { setUsername } = useContext(UserContext);

  const RestaurantCardOpened = isRestaurantOpened(RestaurantCard);

  // console.log("listofRes : ", listofRestaurants);

  const searchResorDish = () => {
    const filteredRes = listofRestaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    return filteredRes.length == 0
      ? setResultsFound(false)
      : setFilteredRestaurants(filteredRes);
  };

  const fetchData = async () => {
    setListofRestaurants([]);
    const myData = await fetch(
      "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D28.6315885%26lng%3D77.28307649999999%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
    );
    const jsonData = await myData.json();

    const arrayOfRestaurants =
      jsonData?.data?.cards[1]?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget"
        ? jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        : jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;

    setListofRestaurants(arrayOfRestaurants);
    setFilteredRestaurants(arrayOfRestaurants);
  };

  useEffect(() => {
    // console.log("useffect triggered");
    if (searchInput === "") {
      setResultsFound(true);
      fetchData();
    }
  }, [searchInput]);

  if (!onlineStatus) {
    return <h1 style={{ textAlign: "center" }}>Looks like you're offline!</h1>;
  }

  return (listofRestaurants && listofRestaurants?.length) === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex items-center justify-around">
        <div className="m-4 p-4">
          <input
            data-testid="searchInput"
            placeholder="search your favorite restaurant..."
            className="border border-solid border-black w-60"
            type="text"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                searchResorDish();
              }
            }}
          />
          <button
            className="px-4 py-1 m-2 bg-cyan-200 rounded-xl"
            onClick={() => {
              searchResorDish();
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            data-testid="topRated"
            className="px-4 py-2 m-2 bg-cyan-100 rounded-lg"
            onClick={() => {
              if (btnName === seeAllRes) {
                fetchData();
                setBtnName(topRated);
              } else {
                const newResData = getTopRated(listofRestaurants);
                setFilteredRestaurants(newResData);
                setBtnName(seeAllRes);
              }
            }}
          >
            {btnName}
          </button>
        </div>
        <div>
          <label>Your Name Here: </label>
          <input
            className="border border-solid border-black ml-2 px-2"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
      </div>
      {resultsFound === false ? (
        <NoResult />
      ) : (
        <div className="flex flex-wrap items-stretch">
          {filteredRestaurants?.length > 0 &&
            filteredRestaurants.map((restaurant) => {
              return (
                <Link
                  className="my-4"
                  key={restaurant.info.id}
                  to={"/restaurants/" + restaurant.info.id}
                >
                  {restaurant.info.isOpen ? (
                    <RestaurantCardOpened {...restaurant.info} />
                  ) : (
                    <RestaurantCard {...restaurant.info} />
                  )}
                </Link>
              );
            })}
        </div>
      )}
    </>
  );
};

export default Body;
