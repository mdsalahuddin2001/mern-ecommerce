import { useState } from "react";
import Logo from "../components/Logo";
import LoginHero from "../assets/svg/login-illustration.svg";
import ButtonLoader from "../components/ui/loaders/ButtonLoader";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { useRegisterMutation } from "../features/auth/authApi";
import { useEffect } from "react";
import Alert from "../components/ui/Alert";
import { useSelector } from "react-redux";

const loginFormSchema = Yup.object().shape({
  email: Yup.string()
    .required("Please provide email!")
    .email("Please provide a valid email"),
  name: Yup.string().required("Please provide your password"),
  password: Yup.string().required("Please provide your password"),
});

// Initial Login Form Values
const initialValues = {
  name: "",
  email: "mdahmede442@gmail.com",
  password: "123456",
};
const Register = () => {
  const [loginError, setLoginError] = useState(null);
  const [register, { isLoading, error }] = useRegisterMutation();
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (error?.data?.message) {
      setLoginError(error?.data?.message);
    }
  }, [error]);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);
  // login submit handler
  const handleSubmit = (values) => {
    register(values)
      .unwrap()
      .then((data) => {
        toast.success("Welcome! Your registration is successful");
      });
  };

  return (
    <div className="grid content-center justify-center w-full min-h-screen grid-cols-1 p-2 ">
      <div className="container p-4 bg-white rounded-md shadow-cardShadow lg:grid lg:grid-cols-2 lg:gap-4 lg:justify-center lg:content-center">
        <div className="hidden lg:block ">
          <img
            className="max-w-[80%] p-20"
            src={LoginHero}
            alt="login-illustration"
          />
        </div>
        <div className="flex items-center justify-center">
          <Formik
            initialValues={initialValues}
            validationSchema={loginFormSchema}
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
                  {/* error message */}
                  {loginError ? (
                    <Alert type="danger" className="mb-8">
                      {loginError}
                    </Alert>
                  ) : null}
                  {/* name */}
                  <div className="relative z-0 w-full mb-6 group">
                    <Field
                      name="name"
                      id="name"
                      className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-primary peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="name"
                      className="peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Name
                    </label>
                    {errors.name && touched.name ? (
                      <p className="mt-4 text-sm text-red-400">{errors.name}</p>
                    ) : null}
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
                      Email
                    </label>
                    {errors.email && touched.email ? (
                      <p className="mt-4 text-sm text-red-400">
                        {errors.email}
                      </p>
                    ) : null}
                  </div>

                  {/* password input */}
                  <div className="relative z-0 w-full mb-6 group">
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-primary peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="email"
                      className="peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary border-primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Password
                    </label>
                    {errors.password && touched.password ? (
                      <p className="mt-4 text-sm text-red-400">
                        {errors.password}
                      </p>
                    ) : null}
                  </div>
                  <div className="mb-8 input-group">
                    <Link to="/login" className="text-primary">
                      Login
                    </Link>
                  </div>
                  <div className="input-group">
                    <button type="submit" className="btn">
                      {isLoading ? <ButtonLoader /> : null}
                      Register
                    </button>
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
export default Register;
