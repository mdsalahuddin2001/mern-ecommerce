import Banners from "../../components/Home/Banners";
import Products from "../../components/Products/ProductsGrid";
import { useGetProductsQuery } from "../../features/products/productsApi";
const Home = () => {
  const { isLoading, data, isError, error } = useGetProductsQuery();
  return (
    <>
      <Banners />
      <div className="container">
        <h2 className="text-2xl font-medium  title">Products</h2>
        <Products
          isLoading={isLoading}
          data={data}
          isError={isError}
          error={error}
        />
      </div>
    </>
  );
};
export default Home;
