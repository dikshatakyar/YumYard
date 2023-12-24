import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/config";
import { addItem, removeItem } from "../utils/cartSlice";
import { useEffect, useState } from "react";

const ItemList = ({ items, addBtn }) => {
  const dispatch = useDispatch();
  // const cartItemsSelector = useSelector((store) => store.cart.items);

  const handleRemoveItem = (item) => {
    // console.log("remove item : ", item);
    dispatch(removeItem(item));
  };

  const handleAddItem = (item) => {
    dispatch(addItem(item));
    // console.log("CARTITEMS LENGTH : ");
  };

  return (
    <>
      {items.map((item) => {
        const { name, price, description, defaultPrice, imageId, id } =
          item.card.info;

        return (
          <div
            key={id}
            className="p-2 m-2 border-b-4 border-gray-200 flex justify-between text-start"
          >
            <div className="w-9/12 flex justify-center flex-col">
              <div className="flex flex-col py-2">
                <span className="font-semibold">{name}</span>
                <span> ₹{price / 100 ? price / 100 : defaultPrice / 100}</span>
              </div>
              <p className="text-xs flex text-gray-700">{description}</p>
            </div>

            <div className="w-3/12 p-4">
              {imageId && (
                <img src={IMG_CDN_URL + imageId} className="object-cover" />
              )}
              {addBtn ? (
                <div className="flex justify-center">
                  <button
                    className="shadow-lg p-2 text-green-600 font-semibold rounded-lg"
                    onClick={() => handleAddItem(item)}
                  >
                    ADD
                  </button>
                </div>
              ) : (
                <div className="flex justify-center">
                  <button
                    className="shadow-lg p-2 text-red-500 font-semibold rounded-lg"
                    onClick={() => handleRemoveItem(item)}
                  >
                    REMOVE
                  </button>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ItemList;
