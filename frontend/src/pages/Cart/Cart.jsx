import CartList from "../../components/Cart/CartList";
import CartSummary from "../../components/Cart/CartSummary";

const Cart = () => {
  return (
    <div>
      {/* <!-- breadcrum --> */}
      <div className="container flex items-center gap-3 py-4">
        <a href="index.html" className="text-base text-primary">
          <i className="fas fa-home"></i>
        </a>
        <span className="text-sm text-gray-400">
          <i className="fas fa-chevron-right"></i>
        </span>
        <p className="font-medium text-gray-600 uppercase">Shopping Cart</p>
      </div>
      {/* <!-- breadcrum end --> */}

      {/* <!-- cart wrapper --> */}
      <div className="container items-start grid-cols-12 gap-6 pt-4 pb-16 lg:grid">
        {/* <!-- product cart --> */}
        <CartList />
        {/* <!-- product cart end --> */}
        {/* <!-- order summary --> */}
        <CartSummary />
        {/* <!-- order summary end --> */}
      </div>
      {/* <!-- cart wrapper end --> */}
    </div>
  );
};
export default Cart;
