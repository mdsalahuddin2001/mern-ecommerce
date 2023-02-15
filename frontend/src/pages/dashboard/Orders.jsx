import { useGetOrdersQuery } from "../../features/orders/ordersApi";
import Alert from "../../components/ui/Alert";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import numberWithCommas from "../../utils/numberWithCommas";
import moment from "moment";
const statusBadge = (status) => {
  return status === "delivered" ? (
    <span className="px-4 py-1 text-xs font-bold text-[#4ADE80] rounded-full bg-[#4ADE80]/10">
      Delivered
    </span>
  ) : status === "cancelled" ? (
    <span className="px-4 py-1 text-xs font-bold text-[#F87171] rounded-full bg-[#F87171]/10">
      Cancelled
    </span>
  ) : (
    <span className="px-4 py-1 text-xs rounded-full bg-[#FFBF00]/10 text-[#FFBF00] font-bold">
      Pending
    </span>
  );
};
const Orders = () => {
  const { isLoading, data, isError, error } = useGetOrdersQuery();
  // decide what to render
  let content = null;
  if (isLoading) {
    content = <h1 className="text-4xl">Loading...</h1>;
  } else if (isError) {
    content = <Alert type="danger">{error?.data?.message}</Alert>;
  } else if (data && data?.orders?.length > 0) {
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
                      {/* <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                  >
                    ID
                  </th> */}
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        DATE
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        TOTAL PRICE
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        STATUS
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        ACTION
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {data?.orders?.map((order) => (
                      <tr key={order._id}>
                        {/* <td className="py-4 pl-4 pr-3 text-sm whitespace-nowrap sm:pl-6">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          {order._id}
                        </div>
                      </div>
                    </td> */}
                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                          <div className="text-gray-900">
                            {moment(order.createdAt).format("MMM Do YYYY")}
                          </div>
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                          BDT {numberWithCommas(order.totalPrice)}
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {statusBadge(order.status)}
                        </td>
                        <td className="relative py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-6">
                          <div className="flex items-center space-x-2">
                            <Link
                              to={`/orders/${order._id}`}
                              className="flex items-center px-4 py-1 text-xs text-white text-green-400 bg-black rounded hover:text-green-600"
                            >
                              <AiFillEye className="mr-1 text-lg" /> Details
                            </Link>
                            <button className="text-lg text-red-400 hover:text-red-600">
                              {/* <RiDeleteBin6Fill /> */}
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
export default Orders;
