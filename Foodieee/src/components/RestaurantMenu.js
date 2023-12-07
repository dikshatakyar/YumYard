import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { IMG_CDN_URL } from "../utils/config";
import NoResult from "./NoResult";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
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

  // console.log(
  //   "MENU LIST : ",
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  // );

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

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
      {/* {itemCards ? (
        <div className="flex flex-col justify-center items-center">
          <h1>MENU</h1>
          <div>
            <div className="flex flex-row justify-between m-3 font-bold">
              <div>ITEMS</div>
              <div>PRICE</div>
            </div>
            {itemCards &&
              itemCards.map((item) => {
                return (
                  <li
                    className="flex justify-between m-2"
                    key={item.card.info.id}
                  >
                    <div className="flex flex-wrap">{item.card.info.name}</div>
                    <div className="ml-8">
                      Rs.{" "}
                      {item.card.info.price
                        ? item.card.info.price / 100
                        : item.card.info.defaultPrice / 100}
                    </div>
                  </li>
                );
              })}
          </div>
        </div>
      ) : (
        <NoResult />
      )} */}

      <div className="text-center">
        {categories.map((category) => {
          return (
            <RestaurantCategory
              key={category?.card?.card?.title}
              data={category?.card?.card}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
