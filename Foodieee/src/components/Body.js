import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import NoResult from "./NoResult";

const getTopRated = (listofRestaurants) => {
  return listofRestaurants.filter(
    (restaurant) => restaurant.info.avgRating > 4.0
  );
};

const Body = () => {
  const [searchInput, setSearchInput] = useState(""); //state variable
  const [listofRestaurants, setListofRestaurants] = useState([]);
  //when setListofRestaurants will be called, it will find the diff and do reconcillation
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [resultsFound, setResultsFound] = useState(true);

  const searchResorDish = () => {
    const filteredRes = listofRestaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    return filteredRes.length == 0
      ? setResultsFound(false)
      : setFilteredRestaurants(filteredRes);
  };

  const fetchData = async () => {
    const myData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6315885&lng=77.28307649999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await myData.json();
    console.log("JSON DATA : ", jsonData);
    setListofRestaurants(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurants(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  useEffect(() => {
    if (searchInput === "") {
      setResultsFound(true);
      fetchData();
    }
  }, [searchInput]);

  return (listofRestaurants && listofRestaurants.length) === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="filter">
        <div className="search">
          <input
            placeholder="search your favorite restaurant..."
            className="search-box"
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
            onClick={() => {
              searchResorDish();
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const newResData = getTopRated(listofRestaurants);
            setFilteredRestaurants(newResData);
          }}
        >
          TOP RATED RESTAURANT
        </button>
      </div>
      {resultsFound === false ? (
        <NoResult />
      ) : (
        <div className="restaurant-list">
          {filteredRestaurants.length > 0 &&
            filteredRestaurants.map((restaurant) => {
              return (
                <Link
                  className="res-link"
                  key={restaurant.info.id}
                  to={"/restaurants/" + restaurant.info.id}
                >
                  <RestaurantCard {...restaurant.info} />
                </Link>
              );
            })}
        </div>
      )}
    </>
  );
};

export default Body;
