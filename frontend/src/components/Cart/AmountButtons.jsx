import { useDispatch } from "react-redux";
import { toggleItemAmount } from "../../features/cart/cartSlice";
const AmountButtons = ({ amount, _id }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex text-gray-600 border border-gray-300 divide-x divide-gray-300">
      <button
        className="flex items-center justify-center w-8 h-8 text-xl cursor-pointer select-none"
        onClick={() => dispatch(toggleItemAmount({ _id, todo: "dec" }))}
      >
        -
      </button>
      <div className="flex items-center justify-center w-10 h-8">{amount}</div>
      <button
        className="flex items-center justify-center w-8 h-8 text-xl cursor-pointer select-none"
        onClick={() => dispatch(toggleItemAmount({ _id, todo: "inc" }))}
      >
        +
      </button>
    </div>
  );
};
export default AmountButtons;
