const paymentMethods = [
  { value: "cod", title: "Cash On Delivery" },
  { value: "sslcommerz", title: "SSL Commerz" },
];
const PaymentInfo = ({ order }) => {
  const { paymentMethod, isPaid, paidAt } = order;
  return (
    <div className="p-4 space-y-1 bg-white rounded shadow-cardShadow">
      <h4 className="text-base font-bold">Payment</h4>
      <p>
        <span className="font-semibold text-gray-700">Method: </span>
        {paymentMethods.find((method) => method.value === paymentMethod)?.title}
      </p>
      <p>
        <span className="font-semibold text-gray-700">Status: </span>
        {isPaid ? (
          <span className="px-4 py-1 text-xs font-bold text-[#4ADE80] rounded-full bg-[#4ADE80]/10">
            Paid
          </span>
        ) : (
          <span className="px-4 py-1 text-xs font-bold text-[#F87171] rounded-full bg-[#F87171]/10">
            Not Paid
          </span>
        )}
      </p>
      {isPaid && paidAt && (
        <p>
          <span className="font-semibold text-gray-700">Paid At: </span>
          {paidAt}
        </p>
      )}
    </div>
  );
};
export default PaymentInfo;
