import { useState } from "react";
import { useEffect } from "react";
import {
  useGetCategoriesQuery,
  useAddCategoryMutation,
} from "../../features/categories/categoriesApi";
import { Formik, Form, Field } from "formik";
import Select from "react-select";
import toast from "react-hot-toast";
import * as Yup from "yup";
const catSchema = Yup.object().shape({
  name: Yup.string().required("Category name is required"),
  parentId: Yup.string().required("Parent Id is required"),
});
const Products = () => {
  const { data, isLoading } = useGetCategoriesQuery();
  const [addCategory] = useAddCategoryMutation();
  const [catOptions, setCatOptions] = useState([]);
  console.log(catOptions);

  useEffect(() => {
    if (data?.categories) {
      const options = data?.categories.map((cat) => ({
        label: cat.name,
        value: cat._id,
      }));
      setCatOptions(options);
    }
  }, [data]);

  // handle submit
  const handleSubmit = (values) => {
    console.log(values);
    addCategory(values)
      .unwrap()
      .then((data) => {
        toast.success("Category added");
      });
  };
  if (isLoading) {
    return <h1 className="text-4xl">Loading</h1>;
  }

  return (
    <div>
      {JSON.stringify(data?.categories)}

      <Formik
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
      </Formik>
    </div>
  );
};
export default Products;
