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
    content = <Alert type="danger">{error?.data?.message}</Alert>;
  } else if (data?.products?.length < 1) {
    content = <Alert type="danger">No Product Found!</Alert>;
  } else if (data?.products?.length > 0) {
    content = (
      <div className="grid justify-center gap-8 md:grid-cols-2 lg:grid-cols-3">
        {data.products.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </div>
    );
  }

  return (
    <section className="py-8">
      <div className="container">
        <h2 className="mb-10 text-2xl font-medium title">Products</h2>
        {content}
      </div>
    </section>
  );
};
export default Products;
