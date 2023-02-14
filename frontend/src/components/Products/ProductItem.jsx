import { Link } from "react-router-dom";
import Stars from "./Stars";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
const ProductItem = ({ product }) => {
  const { name, price, image, _id } = product;
  const dispatch = useDispatch();

  // add to cart handler
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
  return (
    <div className="w-full max-w-sm bg-white rounded-md shadow-cardShadow">
      <Link
        to={`/products/${_id}`}
        className="flex items-center justify-center"
      >
        <img
          className="p-8 rounded-t-lg h-[200px]"
          src={image}
          alt="productimage"
        />
      </Link>
      <div className="px-5 pb-5">
        <a href="/products/id">
          <h5 className="text-base font-medium tracking-tight transition hover:text-primary">
            {name}
          </h5>
        </a>
        <div>
          <Stars />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-base font-medium">BDT {price}</span>
          <button
            className="bg-primary text-white  hover:bg-primaryHover transition-all   font-medium rounded-md text-sm px-5 py-2.5 text-center capitalize"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductItem;
