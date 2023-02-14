import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CheckoutWizard from "../../components/Checkout/CheckoutWizard";
import { updatePaymentMethod } from "../../features/checkout/checkoutSlice";

const paymentMethods = [
  { value: "cod", title: "Cash On Delivery" },
  { value: "sslcommerz", title: "SSL Commerz" },
];
const PaymentMethod = () => {
  const { paymentMethod } = useSelector((state) => state.checkout);
  console.log(paymentMethod);
  const [method, setMethod] = useState(paymentMethod || "cod");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePaymentMethod(method));
    navigate("/place-order");
  };

  return (
    <div className="container">
      <CheckoutWizard activeStep={2} />
      <form className="mt-8" onSubmit={handleSubmit}>
        <label className="text-base font-medium text-gray-900">
          Payment Method
        </label>
        <p className="text-sm leading-5 text-gray-500">
          Please select the method you want to pay with!
        </p>
        <fieldset className="mt-4">
          <legend className="sr-only">Payment method</legend>
          <div className="space-y-4">
            {paymentMethods.map((paymentMethod) => (
              <div key={paymentMethod.value} className="flex items-center">
                <input
                  id={paymentMethod.value}
                  name="paymentMethod"
                  type="radio"
                  defaultChecked={paymentMethod.value === method}
                  onChange={() => setMethod(paymentMethod.value)}
                  className="w-4 h-4 border-gray-300 cursor-pointer text-primary focus:ring-primary"
                />
                <label
                  htmlFor={paymentMethod.value}
                  className="block mb-0 ml-3 text-sm font-medium text-gray-700 cursor-pointer"
                >
                  {paymentMethod.title}
                </label>
              </div>
            ))}
            <div>
              <button className="py-3 mt-8 bg-black rounded-md btn hover:bg-primary">
                Continue
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};
export default PaymentMethod;
