import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { ResMenu_API } from "../config";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [itemCards, setItemCards] = useState([]);

  const { resId } = useParams();

  const fetchMenu = async () => {
    const menuData = await fetch(ResMenu_API + resId);
    const json = await menuData.json();
    setResInfo(json.data);
    console.log("MenuData", json);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  useEffect(() => {
    const cardsTest = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;

    if (cardsTest?.cards[1]?.card?.card.title == "Recommended") {
      setItemCards(cardsTest?.cards[1]?.card?.card.itemCards);
    } else {
      setItemCards(cardsTest?.cards[2]?.card?.card.itemCards);
    }
    console.log("ITEMCARDS", itemCards);
  }, [resInfo]);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  // if (cardsTest?.cards[1]?.card?.card.title == "Recommended") {
  //   setItemCards(cardsTest?.cards[1]?.card?.card.itemCards);
  // } else {
  //   setItemCards(cardsTest?.cards[2]?.card?.card.itemCards);
  // }

  console.log("itemCards : ", itemCards);

  // const { itemCards } =
  // resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>
        {cuisines.join(", ")} : {costForTwoMessage}
      </h3>
      <h2>Menu</h2>

      <ul>
        {itemCards &&
          itemCards.map((item) => {
            {
            }
            return (
              <li key={item.card.info.id}>
                {item.card.info.name} -- Rs.{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
