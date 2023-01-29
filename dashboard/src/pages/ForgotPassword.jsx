import Logo from "../components/Logo";
import forgotIllustration from "../assets/svg/forgot-password.svg";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
const formSchema = Yup.object().shape({
  email: Yup.string()
    .required("Please provide email!")
    .email("Please provide a valid email!"),
});
const ForgotPassword = () => {
  // handle submit
  const handleSubmit = (values) => {};
  return (
    <div className="grid content-center justify-center w-full min-h-screen grid-cols-1 p-2 ">
      <div className="container p-4 bg-white rounded-md shadow-cardShadow lg:grid lg:grid-cols-2 lg:gap-4 lg:justify-center lg:content-center">
        <div className="hidden lg:block ">
          <img
            className="max-w-[80%] p-20"
            src={forgotIllustration}
            alt="login-illustration"
          />
        </div>
        <div className="flex items-center justify-center">
          <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={formSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => {
              return (
                <Form
                  className="max-w-[600px] min-w-[300px] w-full p-4 rounded-[4px] "
                  autoComplete="off"
                >
                  <div className="flex items-center justify-center mb-12">
                    <Logo />
                  </div>
                  {/* email */}
                  <div className="relative z-0 w-full mb-6 group">
                    <Field
                      name="email"
                      id="email"
                      className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-primary peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="email"
                      className="peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Your Email
                    </label>
                    {errors.email && touched.email ? (
                      <p className="mt-4 text-sm text-red-400">
                        {errors.email}
                      </p>
                    ) : null}
                  </div>
                  <div className="mb-8 input-group">
                    <button type="submit" className="btn">
                      Reset
                    </button>
                  </div>
                  <div className="input-group">
                    <Link to="/login" className="text-primary">
                      Login instead.
                    </Link>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};
export default ForgotPassword;
