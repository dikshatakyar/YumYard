import { IMG_CDN_URL } from "../utils/config";

const ItemList = ({ items }) => {
  console.log("THE items", items);
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
              <div className="flex justify-center">
                <button className="shadow-lg p-2 text-green-600 font-semibold rounded-lg">
                  ADD
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ItemList;
