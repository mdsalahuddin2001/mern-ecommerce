import Products from "../../components/Products/ProductsGrid";
import Sidebar from "../../components/Shop/Sidebar";
import { useGetProductsQuery } from "../../features/products/productsApi";

const Shop = () => {
  const { isLoading, data, isError, error } = useGetProductsQuery();
  return (
    <div className="grid lg:grid-cols-[300px_auto] gap-8">
      <div>
        <Sidebar />
      </div>
      <div className="px-4">
        <Products
          isLoading={isLoading}
          data={data}
          isError={isError}
          error={error}
        />
      </div>
    </div>
  );
};
export default Shop;
