import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartSummary = () => {
  const { totalPrice } = useSelector((state) => state.cart);
  return (
    <div className="px-4 py-4 mt-6 bg-white rounded shadow-cardShadow xl:col-span-3 lg:col-span-4 lg:mt-0">
      <h4 className="mb-4 text-lg font-medium text-gray-800 uppercase">
        ORDER SUMMARY
      </h4>
      <div className="pb-3 space-y-1 text-gray-600 border-b border-gray-200">
        <div className="flex justify-between font-medium">
          <p>Subtotal</p>
          <p>BDT {totalPrice}</p>
        </div>
        <div className="flex justify-between">
          <p>Delivery</p>
          <p>0</p>
        </div>
        <div className="flex justify-between">
          <p>Tax</p>
          <p>0</p>
        </div>
      </div>
      <div className="flex justify-between my-3 font-semibold text-gray-800 uppercase">
        <h4>Total</h4>
        <h4>BDT {totalPrice}</h4>
      </div>

      {/* <!-- checkout --> */}
      <Link to="/shipping" className="block w-full px-3 rounded-md btn">
        Process to checkout
      </Link>
      {/* <!-- checkout end --> */}
    </div>
  );
};
export default CartSummary;
