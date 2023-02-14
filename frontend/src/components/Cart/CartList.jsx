import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
const CartList = () => {
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);
  if (cartItems.length < 1) {
    return (
      <div className="xl:col-span-9 lg:col-span-8">
        <p>
          Your cart is empty.{" "}
          <Link
            to="/"
            className="underline transition text-primary hover:text-primaryHover"
          >
            Fill Your Cart
          </Link>
        </p>
      </div>
    );
  }
  return (
    <div className="xl:col-span-9 lg:col-span-8">
      {/* <!-- cart title --> */}
      <div className="hidden py-2 pl-12 pr-20 mb-4 bg-gray-200 xl:pr-28 md:flex">
        <p className="text-center text-gray-600">Product</p>
        <p className="ml-auto mr-16 text-center text-gray-600 xl:mr-24">
          Quantity
        </p>
        <p className="text-center text-gray-600">Total</p>
      </div>
      {/* <!-- cart title end --> */}

      {/* <!-- shipping carts --> */}
      <div className="space-y-4">
        {cartItems.map((cart) => (
          <CartItem key={cart._id} cart={cart} />
        ))}
      </div>
      {/* <!-- shipping carts end --> */}
    </div>
  );
};
export default CartList;
