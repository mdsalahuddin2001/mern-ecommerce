import CheckoutWizard from "../../components/Checkout/CheckoutWizard";
import OrderDetails from "../../components/Checkout/OrderDetails";
import OrderSummary from "../../components/Checkout/OrderSummary";

const PlaceOrder = () => {
  return (
    <div className="container">
      <CheckoutWizard activeStep={3} />
      <h4 className="mb-4 text-2xl">Preview Order</h4>
      <div className="items-start grid-cols-12 gap-6 pt-4 pb-16 lg:grid">
        {/* <!-- product cart --> */}
        <OrderDetails />
        {/* <!-- product cart end --> */}
        {/* <!-- order summary --> */}
        <OrderSummary />
        {/* <!-- order summary end --> */}
      </div>
    </div>
  );
};
export default PlaceOrder;
