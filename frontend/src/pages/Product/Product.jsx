import { useParams } from "react-router-dom";
import Stars from "../../components/Products/Stars";
import Alert from "../../components/ui/Alert";
import { useGetProductQuery } from "../../features/products/productsApi";
const Product = () => {
  const params = useParams();
  const { isLoading, data, isError, error } = useGetProductQuery(params.id);
  console.log(data);

  // decide what to render
  let content = null;
  if (isLoading && !isError) {
    content = <h1 className="text-6xl">Loading...</h1>;
  } else if (isError && error) {
    content = <Alert type="danger">{error?.data?.message}</Alert>;
  } else if (data && data.name) {
    const { name, price, image, description } = data;
    content = (
      <>
        <section class="text-gray-700 body-font overflow-hidden bg-white">
          <div class="container  py-24">
            <div class="mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                src={image}
              />
              <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                  {name}
                </h1>
                <div>
                  <Stars />
                </div>
                <p class="leading-relaxed mb-4">{description}</p>
                <div class="flex items-center justify-between">
                  <span class="title-font font-medium text-2xl text-gray-900">
                    BDT {price}
                  </span>
                  <div className="flex space-x-4 items-ce">
                    <button class="btn">Add To Cart</button>
                    <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  return <div>{content}</div>;
};
export default Product;
