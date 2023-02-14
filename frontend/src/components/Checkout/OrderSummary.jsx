import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { usePlaceOrderMutation } from "../../features/orders/ordersApi";
import { clearCart } from "../../features/cart/cartSlice";
import ButtonLoader from "../ui/loaders/ButtonLoader";
import { useNavigate } from "react-router-dom";
const OrderSummary = () => {
  // get cart info
  const { totalPrice, cartItems } = useSelector((state) => state.cart);
  // get shipping info
  const { paymentMethod, shippingAddress } = useSelector(
    (state) => state.checkout
  );
  // place order api
  const [placeOrder, { isLoading, isError, error, isSuccess, data }] =
    usePlaceOrderMutation();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // navigate to cart page if cart is empty
  // useEffect(() => {
  //   if (cartItems.length < 1) {
  //     navigate("/cart");
  //   }
  // }, [cartItems, navigate]);

  // show alert if error
  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    }
  }, [isError, error]);

  // navigate to order details page when order is success
  useEffect(() => {
    if (isSuccess) {
      toast.success("Order Success!");
      navigate(`/orders/${data._id}`);
      dispatch(clearCart());
    }
  }, [isSuccess, navigate, data, dispatch]);
  // handle place order
  const handlePlaceOrder = () => {
    const shippingPrice = 0;
    const taxPrice = 0;
    placeOrder({
      totalPrice: totalPrice + shippingPrice + taxPrice,
      itemsPrice: totalPrice,
      taxPrice,
      shippingPrice,
      paymentMethod,
      shippingInfo: shippingAddress,
      orderItems: cartItems.map((item) => ({
        name: item.name,
        amount: item.amount,
        price: item.price,
        image: item.image,
        product: item._id,
      })),
    });
  };
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
      <button
        className="flex items-center justify-center w-full px-3 capitalize rounded-md btn"
        disabled={isLoading}
        onClick={handlePlaceOrder}
      >
        {isLoading && <ButtonLoader />}
        Place order
      </button>
      {/* <!-- checkout end --> */}
    </div>
  );
};
export default OrderSummary;
