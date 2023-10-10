import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({
  name,
  cuisines,
  costForTwo,
  cloudinaryImageId,
  avgRating,
  sla,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating}</h3>
      <h4>{costForTwo} </h4>
      <h4>Delivery Time : {sla.deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
