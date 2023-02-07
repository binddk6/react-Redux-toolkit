import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { removeFromCart } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";
type Props = {};

const Cart = (props: Props) => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);

  const handleGoToProducts = () => {
    history("/");
  };
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      {items.length === 0 ? (
        <div className="flex flex-col items-center">
          <p className="text-lg font-bold mb-2">No items in cart</p>
          <button
            className="bg-blue-500 text-white p-2"
            onClick={handleGoToProducts}
          >
            Products
          </button>
        </div>
      ) : (
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="text-sm font-bold p-2">Product</th>
              <th className="text-sm font-bold p-2">Price</th>
              <th className="text-sm font-bold p-2"></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td className="p-2">{item.title}</td>
                <td className="p-2">{item.price}</td>
                <td className="p-2">
                  <button
                    className="bg-red-500 text-white p-2"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Remove from Cart
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Cart;
