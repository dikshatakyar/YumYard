import ItemList from "./ItemList";
import { useState, useEffect } from "react";

const RestaurantCategory = ({
  data,
  showIndex,
  setShowIndex,
  index,
}) => {
  const handleClick = () => {
    showIndex ? setShowIndex(null) : setShowIndex(index);
  };


  return (
    <div className="w-6/12 mx-auto my-5 bg-gray-50 shadow-lg p-4">
      {/**Accordion Header */}
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>🔽</span>
      </div>
      {/**Accordion Body */}
      {showIndex && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
