import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import AsyncSelect from "react-select/async";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAddProductMutation } from "../../../features/products/productsApi";
import ButtonLoader from "../../../components/ui/loaders/ButtonLoader";
import { useUploadMutation } from "../../../features/upload/uploadApi";
// load categories
const loadCategoryOptions = (inputValue, callback) => {
  fetch("http://localhost:5000/api/v1/categories")
    .then((response) => response.json())
    .then((data) => {
      callback(data.categories);
    });
};

const customCategoryLabel = (item) => {
  return item.name;
};

// product form schema
const formSchema = Yup.object().shape({
  name: Yup.string().required("Product name is required!"),
  price: Yup.number().required("Price is required!"),
  countInStock: Yup.number().required("Product stock amount is required!"),
  description: Yup.string().required("Product description is required!"),
  category: Yup.string().required("Please select a category"),
  image: Yup.string().required("Product image is required!"),
});
const AddProduct = () => {
  const formikRef = useRef();
  const [addProduct, { isLoading, isSuccess }] = useAddProductMutation();
  const [upload, { isLoading: uploadLoading, data }] = useUploadMutation();
  const navigate = useNavigate();
  // handle product add
  const handleSubmit = (values) => {
    addProduct(values);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/admin/products");
    }
  }, [isSuccess, navigate]);

  useEffect(() => {
    if (data) {
      if (formikRef.current) {
        formikRef.current?.setFieldValue("image", data?.secure_url);
      }
    }
  }, [data]);
  const uploadFileHandler = async (e, forImages) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("file", file);
    upload(bodyFormData);
  };
  return (
    <Formik
      innerRef={formikRef}
      initialValues={{
        name: "",
        price: "",
        description: "",
        countInStock: "",
        category: "",
        image: "",
      }}
      validationSchema={formSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, setFieldValue, values }) => {
        return (
          <Form className="space-y-8 divide-y divide-gray-200 max-w-7xl">
            <div className="space-y-8 divide-y divide-gray-200">
              <div className="pt-8">
                <div>
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Add Product
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Add product to your store.
                  </p>
                </div>
                <div className="grid grid-cols-1 mt-6 gap-y-6 gap-x-4 sm:grid-cols-6">
                  {/* product name */}
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Product Name
                    </label>
                    <div className="mt-1">
                      <Field
                        name="name"
                        id="name"
                        type="text"
                        className={`block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                          errors.name && touched.name ? "border-red-400" : ""
                        }`}
                      />
                      <ErrorMessage
                        component="div"
                        className={
                          errors.name && touched.name ? "text-red-400" : null
                        }
                        name="name"
                      />
                    </div>
                  </div>
                  {/* product price */}
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Price
                    </label>
                    <div className="mt-1">
                      <Field
                        type="number"
                        name="price"
                        id="price"
                        className={`block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                          errors.price && touched.price ? "border-red-400" : ""
                        }`}
                      />
                      <ErrorMessage
                        component="div"
                        className={
                          errors.price && touched.price ? "text-red-400" : null
                        }
                        name="price"
                      />
                    </div>
                  </div>
                  {/* Product Description */}
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Description
                    </label>
                    <div className="mt-1">
                      <Field
                        as="textarea"
                        id="description"
                        name="description"
                        className={`block w-full h-32  border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                          errors.description && touched.description
                            ? "border-red-400"
                            : ""
                        }`}
                      />
                      <ErrorMessage
                        component="div"
                        className={
                          errors.description && touched.description
                            ? "text-red-400"
                            : null
                        }
                        name="description"
                      />
                    </div>
                  </div>
                  {/* category select */}
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="category"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Category
                    </label>
                    <div className="mt-1">
                      <AsyncSelect
                        id="category"
                        name="category"
                        onChange={(item) => setFieldValue("category", item._id)}
                        defaultOptions
                        cacheOptions
                        getOptionValue={(item) => item._id}
                        formatOptionLabel={customCategoryLabel}
                        className={`block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                          errors.price && touched.price ? "border-red-400" : ""
                        }`}
                        loadOptions={loadCategoryOptions}
                      />
                      <ErrorMessage
                        component="div"
                        className={
                          errors.category && touched.category
                            ? "text-red-400"
                            : null
                        }
                        name="category"
                      />
                    </div>
                  </div>
                  {/* count in stock */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Stock Quantitiy
                    </label>
                    <div className="mt-1">
                      <Field
                        type="number"
                        name="countInStock"
                        id="countInStock"
                        className={`block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                          errors.price && touched.price ? "border-red-400" : ""
                        }`}
                      />
                      <ErrorMessage
                        component="div"
                        className={
                          errors.countInStock && touched.countInStock
                            ? "text-red-400"
                            : null
                        }
                        name="countInStock"
                      />
                    </div>
                  </div>
                  {/* image */}
                  <div className="sm:col-span-6">
                    <label
                      htmlFor="street-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Product Image
                    </label>
                    <div className="mt-1">
                      <div className="flex items-center justify-center w-full">
                        <label
                          htmlFor="image"
                          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                        >
                          {uploadLoading ? (
                            <ButtonLoader />
                          ) : (
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                              <svg
                                aria-hidden="true"
                                className="w-10 h-10 mb-3 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                ></path>
                              </svg>
                              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                <span className="font-semibold">
                                  Click to upload
                                </span>
                              </p>
                            </div>
                          )}

                          <input
                            id="image"
                            type="file"
                            className="hidden"
                            name="image"
                            onChange={uploadFileHandler}
                          />
                        </label>
                      </div>
                      <ErrorMessage
                        component="div"
                        className={
                          errors.image && touched.image ? "text-red-400" : null
                        }
                        name="image"
                      />
                    </div>
                    {values.image && (
                      <img
                        className="max-w-[200px]"
                        src={values.image}
                        alt=""
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-5">
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {isLoading && <ButtonLoader />} Add Product
                </button>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
export default AddProduct;
