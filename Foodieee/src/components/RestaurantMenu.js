import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { IMG_CDN_URL } from "../utils/config";
import NoResult from "./NoResult";

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

  return (
    <div className="menu">
      <div className="resDetails">
        <div className="resName">
          <h1>{name}</h1>
          <h3>
            {cuisines.join(", ")} : {costForTwoMessage}
          </h3>
          <h3>Rating : {avgRating}</h3>
          <h3>Location : {areaName + ", " + city} </h3>
        </div>
        <div className="resImg">
          <img src={IMG_CDN_URL + cloudinaryImageId} />
        </div>
      </div>
      {itemCards ? (
        <div className="recommendedMenu">
          <h1>MENU</h1>
          <ul>
            <div className="sub-head">
              <div>ITEMS</div>
              <div>PRICE</div>
            </div>
            {itemCards &&
              itemCards.map((item) => {
                return (
                  <li className="menu-item" key={item.card.info.id}>
                    <div className="dishName">{item.card.info.name}</div>
                    <div className="dishPrice">
                      Rs.{" "}
                      {item.card.info.price
                        ? item.card.info.price / 100
                        : item.card.info.defaultPrice / 100}
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      ) : (
        <NoResult />
      )}
    </div>
  );
};

export default RestaurantMenu;
