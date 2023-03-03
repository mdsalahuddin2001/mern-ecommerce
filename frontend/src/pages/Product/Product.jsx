import { useState } from "react";
import { useParams } from "react-router-dom";
import Reviews from "../../components/Product/Reviews";
import Stars from "../../components/Products/Stars";
import Alert from "../../components/ui/Alert";
import { useGetProductQuery } from "../../features/products/productsApi";
import { addToCart } from "../../features/cart/cartSlice";
import numberWithCommas from "../../utils/numberWithCommas";
import { useDispatch } from "react-redux";
import SingleProductLoader from "../../components/ui/loaders/SingleProductLoader";
const Product = () => {
  const [activeTab, setActiveTab] = useState("description");
  const params = useParams();
  const { isLoading, data, isError, error } = useGetProductQuery(params.id);
  const dispatch = useDispatch();
  // decide what to render
  let content = null;
  if (isLoading && !isError) {
    content = (
      <div className="container py-24">
        <SingleProductLoader />
      </div>
    );
  } else if (isError && error) {
    content = (
      <div className="container">
        <Alert type="danger">
          {error?.data?.message || "Something went wrong"}
        </Alert>
      </div>
    );
  } else if (data && data.name) {
    const { name, price, image, description, reviews, rating } = data;
    content = (
      <>
        <section class="text-gray-700 body-font overflow-hidden bg-white">
          <div class="container  py-24">
            <div class="mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200 p-4"
                src={image}
              />
              <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">
                  {name}
                </h1>
                <div className="mb-4">
                  <Stars rating={rating} />
                </div>
                <p class="leading-relaxed mb-4">{description}</p>
                <div class="space-y-4">
                  <span class="title-font font-medium text-2xl text-gray-900">
                    BDT {numberWithCommas(price)}
                  </span>
                  <div className="flex space-x-4 items-ce">
                    <button
                      class="btn"
                      onClick={() => dispatch(addToCart(data))}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center my-6 space-x-8">
              <button
                className={`transition-all duration-300 pb-1 border-b-2  ${
                  activeTab === "description"
                    ? "border-b-primary"
                    : "border-b-transparent"
                }`}
                onClick={() => setActiveTab("description")}
              >
                Description
              </button>
              <button
                className={`transition-all duration-300  pb-1 border-b-2  ${
                  activeTab === "reviews"
                    ? "border-b-primary"
                    : "border-b-transparent"
                }`}
                onClick={() => setActiveTab("reviews")}
              >
                Reviews
              </button>
            </div>
            {activeTab === "description" ? (
              <div className="max-w-[600px]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Veritatis consequatur excepturi nihil! Ipsa temporibus
                praesentium perferendis minus laudantium libero aperiam!
              </div>
            ) : (
              <Reviews productId={params.id} reviews={reviews} />
            )}
          </div>
        </section>
      </>
    );
  }
  return <div>{content}</div>;
};
export default Product;
