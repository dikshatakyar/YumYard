import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { IMG_CDN_URL } from "../utils/config";
import NoResult from "./NoResult";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    areaName,
    city,
    cloudinaryImageId,
  } = resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);

  return (
    <div className="flex flex-col">
      <div className="flex justify-around mt-12">
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl my-5 font-bold">{name}</h1>
          <h3 className="text-lg font-semibold">
            {cuisines.join(", ")} : {costForTwoMessage}
          </h3>
          <h3 className="m-0">Rating : {avgRating}</h3>
          <h3 className="m-0">Location : {areaName + ", " + city} </h3>
        </div>
        <div className="w-[200px] h-auto object-cover">
          <img src={IMG_CDN_URL + cloudinaryImageId} />
        </div>
      </div>

      <div className="text-center">
        {categories.length > 0 ? (
          categories.map((category, index) => {
            return (
              <RestaurantCategory
                key={category?.card?.card?.title}
                data={category?.card?.card}
                showIndex={index === showIndex ? true : false}
                setShowIndex={(index) => setShowIndex(index)}
                index={index}
              />
            );
          })
        ) : (
          <NoResult />
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
