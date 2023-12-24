import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => dispatch(clearCart());

  // console.log("cartItems here : ", cartItems);

  return cartItems.length === 0 ? (
    <h1 className="flex text-2xl m-4 justify-center">ADD SOME ITEMS FIRST!</h1>
  ) : (
    <div className="text-center flex items-center flex-col m-4">
      <div>
        <h1 className="text-3xl font-bold">CART</h1>
        <button
          className="m-4 p-2  border-2 rounded-lg bg-cyan-100 border-black"
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </button>
      </div>
      <div className="w-6/12">
        <ItemList items={cartItems} addBtn={false} />
      </div>
    </div>
  );
};

export default Cart;
