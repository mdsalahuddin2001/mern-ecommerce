import { useParams } from "react-router-dom";
import { IoIosDoneAll } from "react-icons/io";
import OrderItems from "../../components/Order/OrderItems";
import PaymentInfo from "../../components/Order/PaymentInfo";
import ShippingInfo from "../../components/Order/ShippingInfo";
import ButtonLoader from "../../components/ui/loaders/ButtonLoader";
import Alert from "../../components/ui/Alert";
import { FaHandHoldingUsd } from "react-icons/fa";
import { useGetOrderQuery } from "../../features/orders/ordersApi";
import { useMakePaymentMutation } from "../../features/payment/paymentApi";
import { useEffect } from "react";

const Order = () => {
  const { orderId } = useParams();
  const { isLoading, data, isError, error } = useGetOrderQuery(orderId);
  const [makePayment, { isLoading: paymentLoading, data: paymentUrl }] =
    useMakePaymentMutation(orderId);
  console.log(paymentUrl);
  useEffect(() => {
    if (paymentUrl) {
      window.location.replace(paymentUrl);
    }
  }, [paymentUrl]);
  // handle make payment
  const handlePayment = () => {
    makePayment(orderId);
  };
  // decide what to render
  let content = null;
  if (isLoading && !isError) {
    return (content = (
      <div className="container">
        <h1 className="text-4xl">Loading...</h1>
      </div>
    ));
  } else if (isError) {
    content = <Alert type="danger">{error?.data?.message}</Alert>;
  } else if (data && data?._id) {
    const {} = data;

    content = (
      <div className="items-start grid-cols-12 gap-6 pt-4 pb-16 lg:grid">
        <div className="xl:col-span-9 lg:col-span-8">
          <div className="space-y-4">
            {/* Shipping Info */}
            <ShippingInfo order={data} />
            {/* Payment Info */}
            <PaymentInfo order={data} />
            {/* Order Items */}
            <OrderItems order={data} />
          </div>
        </div>
        {/* <!-- product cart --> */}

        {/* <!-- product cart end --> */}
        {/* <!-- order summary --> */}
        <div className="px-4 py-4 mt-6 bg-white rounded shadow-cardShadow xl:col-span-3 lg:col-span-4 lg:mt-0">
          <h4 className="mb-4 text-lg font-medium text-gray-800 uppercase">
            ORDER SUMMARY
          </h4>
          <div className="pb-3 space-y-1 text-gray-600 border-b border-gray-200">
            <div className="flex justify-between font-medium">
              <p>Subtotal</p>
              <p>BDT {data?.itemsPrice}</p>
            </div>
            <div className="flex justify-between">
              <p>Delivery</p>
              <p>{data?.shippingPrice}</p>
            </div>
            <div className="flex justify-between">
              <p>Tax</p>
              <p>{data?.taxPrice}</p>
            </div>
          </div>
          <div className="flex justify-between my-3 font-semibold text-gray-800 uppercase">
            <h4>Total</h4>
            <h4>BDT {data?.totalPrice}</h4>
          </div>
          <button
            className={`flex items-center w-full rounded-md btn ${
              data?.isPaid ? "pointer-events-none bg-green" : null
            }`}
            onClick={handlePayment}
            disabled={data?.isPaid}
          >
            {paymentLoading ? (
              <ButtonLoader />
            ) : data?.isPaid ? (
              <IoIosDoneAll className="mr-2 text-xl font-bold" />
            ) : (
              <FaHandHoldingUsd className="mr-2 text-xl font-bold" />
            )}
            {data?.isPaid ? "Payment Completed" : "Make Payment"}
          </button>
        </div>
        {/* <!-- order summary end --> */}
      </div>
    );
  }

  return (
    <div className="container">
      <h4 className="mb-4 text-2xl">Order ID: {orderId}</h4>
      {content}
    </div>
  );
};
export default Order;
