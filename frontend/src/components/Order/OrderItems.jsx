const OrderItems = ({ order }) => {
  const { orderItems } = order;
  return (
    <div className="p-4 space-y-1 bg-white rounded shadow-cardShadow">
      {orderItems.map((item) => {
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
              <h2 className="mb-3 font-medium xl:text-xl textl-lg">{name}</h2>
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
    </div>
  );
};
export default OrderItems;
