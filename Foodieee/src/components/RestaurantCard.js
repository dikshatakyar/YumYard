import { IMG_CDN_URL } from "../utils/config";

const RestaurantCard = ({
  name,
  cuisines,
  costForTwo,
  cloudinaryImageId,
  avgRating,
  sla,
}) => {
  return (
    <div className="mx-4 h-full p-4 w-[250px] bg-gray-100 rounded-lg flex flex-col justify-between text-center">
      <img
        className="rounded-lg object-cover h-48 w-100"
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <h2 className="font-bold py-4 text-lg">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating}</h3>
      <h4>{costForTwo} </h4>
      <h4>Delivery Time : {sla.deliveryTime} mins</h4>
    </div>
  );
};

export const isRestaurantOpened = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <label className="absolute bg-cyan-300/90 mx-2 p-1 rounded-md">Opened</label>
        <RestaurantCard {...props} />
      </>
    );
  };
};

export default RestaurantCard;
