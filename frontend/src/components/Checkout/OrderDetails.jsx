import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const OrderDetails = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (cartItems.length < 1) {
  //     navigate("/cart");
  //   }
  // }, [cartItems, navigate]);
  return (
    <div className="xl:col-span-9 lg:col-span-8">
      <div className="space-y-4">
        {/* shipping details */}
        <div className="p-4 space-y-1 bg-white rounded shadow-cardShadow">
          <h4 className="text-base font-bold">Shipping</h4>
          <p>
            <span className="font-semibold text-gray-700">Name: </span>MD
            Salahuddin
          </p>
          <p>
            <span className="font-semibold text-gray-700">Address: </span>
            Village: Karihata, Post Office: Ekuria, Upazila: Kapasia, District:
            Gazipur,Dhaka, 1600,Bangladesh
          </p>
          <Link
            to="/shipping"
            className="inline-block underline text-primary !mt-4"
          >
            Edit
          </Link>
        </div>
        {/* payment method */}
        <div className="p-4 space-y-1 bg-white rounded shadow-cardShadow">
          <h4 className="text-base font-bold">Payment</h4>
          <p>
            <span className="font-semibold text-gray-700">Method: </span>Cash On
            Delivery
          </p>

          <Link
            to="/payment-method"
            className="inline-block underline text-primary !mt-4"
          >
            Edit
          </Link>
        </div>
        {/* items */}
        <div className="p-4 space-y-1 bg-white rounded shadow-cardShadow">
          {cartItems.map((item) => {
            const { _id, name, image, amount, price } = item;
            return (
              <div
                key={_id}
                className="flex flex-wrap items-center gap-4 md:justify-between md:gap-6 md:flex-nowrap"
              >
                {/* <!-- cart image --> */}
                <div className="flex-shrink-0 w-32">
                  <img src={image} className="h-[80px]" alt="product" />
                </div>
                {/* <!-- cart image end --> */}
                {/* <!-- cart content --> */}
                <div className="w-full md:w-1/3">
                  <h2 className="mb-3 font-medium xl:text-xl textl-lg">
                    {name}
                  </h2>
                  <p className="font-semibold">
                    BDT {price} x {amount}
                  </p>
                </div>
                {/* <!-- cart content end --> */}
                {/* <!-- cart quantity --> */}

                {/* <!-- cart quantity end --> */}
                <div className="ml-auto md:ml-0">
                  <p className="text-lg font-semibold">BDT {price * amount}</p>
                </div>
              </div>
            );
          })}
          <Link
            to="/cart"
            className="inline-block underline text-primary !mt-4"
          >
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
};
export default OrderDetails;
