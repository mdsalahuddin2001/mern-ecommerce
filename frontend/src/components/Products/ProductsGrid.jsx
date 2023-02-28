import Alert from "../ui/Alert";
import ProductLoader from "../ui/loaders/ProductLoader";
import ProductItem from "./ProductItem";
const Products = ({ isLoading, data, isError, error }) => {
  // decide what to render
  let content = null;
  if (isLoading && !isError) {
    content = (
      <div className="grid justify-center gap-8 md:grid-cols-2 lg:grid-cols-3">
        <ProductLoader />
        <ProductLoader />
        <ProductLoader />
      </div>
    );
  } else if (isError) {
    content = (
      <Alert type="danger">
        {error?.data?.message || "Something went wrong."}
      </Alert>
    );
  } else if (data?.products?.length < 1) {
    content = <Alert type="danger">No Product Found!</Alert>;
  } else if (data?.products?.length > 0) {
    content = (
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {data.products.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </div>
    );
  }

  return <section className="py-8">{content}</section>;
};
export default Products;
