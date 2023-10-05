import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const getTopRated = (listofRestaurants) => {
  return listofRestaurants.filter(
    (restaurant) => restaurant.info.avgRating > 4.0
  );
};

const Body = () => {
  const [searchInput, setSearchInput] = useState(""); //state variable
  const [listofRestaurants, setListofRestaurants] = useState([]);
  //when seListofRestaurants will be called, it will find the diff and do reconcillation
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const myData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6315885&lng=77.28307649999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await myData.json();
    console.log(jsonData);
    setListofRestaurants(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurants(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="filter">
        <div className="search">
          <input
            className="search-box"
            type="text"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRes = listofRestaurants.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchInput.toLowerCase())
              );
              setFilteredRestaurants(filteredRes);
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
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
