import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { removeCartItem } from "../../features/cart/cartSlice";
import AmountButtons from "./AmountButtons";

const CartItem = ({ cart }) => {
  const { _id, name, price, amount, image } = cart;
  const dispatch = useDispatch();
  return (
    <div className="flex flex-wrap items-center gap-4 p-4 bg-white rounded md:justify-between md:gap-6 md:flex-nowrap shadow-cardShadow">
      {/* <!-- cart image --> */}
      <div className="flex-shrink-0 w-32">
        <img src={image} className="h-[80px]" alt="" />
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
      <AmountButtons amount={amount} _id={_id} />
      {/* <!-- cart quantity end --> */}
      <div className="ml-auto md:ml-0">
        <p className="text-lg font-semibold">BDT {amount * price}</p>
      </div>
      <div className="text-lg text-red-400 hover:text-red-600">
        <button onClick={() => dispatch(removeCartItem(_id))}>
          <RiDeleteBin5Line />
        </button>
      </div>
    </div>
  );
};
export default CartItem;
