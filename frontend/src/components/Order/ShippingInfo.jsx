const statusBadge = (status) => {
  return status === "delivered" ? (
    <span className="px-4 py-1 text-xs font-bold text-[#4ADE80] rounded-full bg-[#4ADE80]/10">
      Delivered
    </span>
  ) : status === "cancelled" ? (
    <span className="px-4 py-1 text-xs font-bold text-[#F87171] rounded-full bg-[#F87171]/10">
      Cancelled
    </span>
  ) : (
    <span className="px-4 py-1 text-xs rounded-full bg-[#FFBF00]/10 text-[#FFBF00] font-bold">
      Pending
    </span>
  );
};
const ShippingInfo = ({ order = {} }) => {
  const { shippingInfo } = order;
  const { name, shippingAddress } = shippingInfo;
  return (
    <div className="p-4 space-y-1 bg-white rounded shadow-cardShadow">
      <h4 className="text-base font-bold">Shipping</h4>
      <p>
        <span className="font-semibold text-gray-700">Name: </span>
        {name}
      </p>
      <p>
        <span className="font-semibold text-gray-700">Address: </span>
        {shippingAddress}
      </p>
      <p>
        <span className="font-semibold text-gray-700">Status: </span>{" "}
        {statusBadge(order?.status)}
      </p>
    </div>
  );
};
export default ShippingInfo;
