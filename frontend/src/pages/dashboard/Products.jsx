import { useGetProductsQuery } from "../../features/products/productsApi";
import TableLoader from "../../components/ui/loaders/TableLoader";
import Alert from "../../components/ui/Alert";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Fill } from "react-icons/ri";
const Products = () => {
  const { data, isLoading, isError, error } = useGetProductsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  // decide what to render
  let content = null;
  if (isLoading && !isError) {
    content = (
      <div>
        <TableLoader />
      </div>
    );
  } else if (isError) {
    content = (
      <div>
        <Alert type="danger">
          {error?.data?.message || "Something went wrong!"}
        </Alert>
      </div>
    );
  } else if (data?.products?.length < 1) {
    content = (
      <div>
        <Alert type="danger">No product found.</Alert>
      </div>
    );
  } else if (data && data?.products?.length > 0) {
    content = (
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">Products</h1>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <Link
              to="/admin/products/add"
              type="button"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            >
              Add Product
            </Link>
          </div>
        </div>
        <div className="flex flex-col mt-8">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="relative overflow-x-auto shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Quantity
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      ></th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {data?.products?.map((product) => (
                      <tr key={product._id}>
                        <td className="py-4 pl-4 pr-3 text-sm whitespace-nowrap sm:pl-6">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-10 h-10 rounded-full"
                                src={product.image}
                                alt={product.name}
                              />
                            </div>
                            <div className="ml-4">
                              <div className="font-medium text-gray-900">
                                {product.name}
                              </div>
                              <div className="text-gray-500">
                                {/* {product.price} */}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                          <div className="text-gray-900">
                            BDT {product.price}
                          </div>
                          <div className="text-gray-500">
                            {/* {product.department} */}
                          </div>
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {/* <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                            Active
                          </span> */}
                          {product.countInStock}
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {product.role}
                        </td>
                        <td className="relative py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-6">
                          <div className="flex items-center space-x-2">
                            <Link
                              to={`/admin/products/edit/${product._id}`}
                              className="text-lg text-green-400 hover:text-green-600"
                            >
                              <FiEdit />
                            </Link>
                            <button className="text-lg text-red-400 hover:text-red-600">
                              <RiDeleteBin6Fill />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <div>{content}</div>;
};
export default Products;

{
  /* <Formik
initialValues={{ name: "", parentId: "" }}
validationSchema={catSchema}
onSubmit={handleSubmit}
>
{({ values, errors, touched, setFieldValue }) => {
  return (
    <Form className="my-10">
      <Select
        className="basic-single"
        classNamePrefix="select"
        isLoading={isLoading}
        isClearable={true}
        name="parentId"
        options={catOptions}
        onChange={(e) => {
          setFieldValue("parentId", e.value);
        }}
      />

      <Field
        name="name"
        className="p-2 my-10 border w-72"
        placeholder="Category Name"
      />

      <button type="submit" className="btn">
        Add
      </button>
    </Form>
  );
}}
</Formik> */
}
