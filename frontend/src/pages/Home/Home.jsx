import Banners from "../../components/Home/Banners";
import Products from "../../components/Products/ProductsGrid";
import { useGetProductsQuery } from "../../features/products/productsApi";
const Home = () => {
  const { isLoading, data, isError, error } = useGetProductsQuery();
  return (
    <>
      <Banners />
      <Products
        isLoading={isLoading}
        data={data}
        isError={isError}
        error={error}
      />
    </>
  );
};
export default Home;
