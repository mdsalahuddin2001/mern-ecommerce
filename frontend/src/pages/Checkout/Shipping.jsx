import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import CheckoutWizard from "../../components/Checkout/CheckoutWizard";
import { updateShippingAddress } from "../../features/checkout/checkoutSlice";
// shipping form shcema
const formSchema = Yup.object().shape({
  name: Yup.string().required("Please enter your name!"),
  email: Yup.string()
    .required("Please enter your email!")
    .email("Please enter a valid email!"),
  phone: Yup.string().required("Please enter your phone number!"),
  shippingAddress: Yup.string().required("Please enter your shipping address!"),
  paymentMethod: Yup.string(),
});

const Shipping = () => {
  const { shippingAddress } = useSelector((state) => state.checkout);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // handle submit
  const handleSubmit = (values) => {
    dispatch(updateShippingAddress(values));
    navigate("/payment-method");
  };
  return (
    <div className="container">
      <CheckoutWizard activeStep={1} />
      <Formik
        initialValues={{
          name: shippingAddress?.name || "",
          email: shippingAddress?.email || "",
          shippingAddress: shippingAddress?.shippingAddress || "",
          phone: shippingAddress?.phone || "",
        }}
        validationSchema={formSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => {
          return (
            <Form className="max-w-[600px] space-y-3">
              {/* name */}
              <div>
                <label className="label-basic" htmlFor="name">
                  Full Name
                </label>
                <Field
                  className={`input-basic
                    ${
                      errors.name && touched.name
                        ? "border border-red-400 bg-white"
                        : null
                    }`}
                  id="name"
                  name="name"
                />
                <ErrorMessage
                  component="div"
                  className={
                    errors.name && touched.name ? "text-red-400" : null
                  }
                  name="name"
                />
              </div>
              {/* email */}
              <div>
                <label className="label-basic" htmlFor="email">
                  Email
                </label>
                <Field
                  className={`input-basic ${
                    errors.email && touched.email
                      ? "border border-red-400 bg-white"
                      : null
                  }`}
                  id="email"
                  name="email"
                />
                <ErrorMessage
                  component="div"
                  className={
                    errors.name && touched.name ? "text-red-400" : null
                  }
                  name="email"
                />
              </div>
              {/* Address */}
              <div>
                <label className="label-basic" htmlFor="shippingAddress">
                  Shipping Address
                </label>
                <Field
                  as="textarea"
                  id="shippingAddress"
                  name="shippingAddress"
                  className={`textarea-basic
                    ${
                      errors.shippingAddress && touched.shippingAddress
                        ? "border border-red-400 bg-white"
                        : "border-none"
                    }`}
                />
                <ErrorMessage
                  component="div"
                  name="shippingAddress"
                  className={
                    errors.shippingAddress && touched.shippingAddress
                      ? "text-red-400"
                      : null
                  }
                />
              </div>
              {/* Phone Number */}
              <div>
                <label className="label-basic" htmlFor="phone">
                  Phone Number
                </label>
                <Field
                  id="phone"
                  name="phone"
                  className={`input-basic
                    ${
                      errors.phone && touched.phone
                        ? "border border-red-400 bg-white"
                        : null
                    }`}
                />
                <ErrorMessage
                  component="div"
                  className={
                    errors.phone && touched.phone ? "text-red-400" : null
                  }
                  name="phone"
                />
              </div>
              <div className="!mt-8">
                <button
                  type="submit"
                  className="py-3 bg-black rounded-md btn hover:bg-primary "
                >
                  Continue
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
export default Shipping;
