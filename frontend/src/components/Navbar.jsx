import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { FaAngleDown } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { useLogoutMutation } from "../features/auth/authApi";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const [logout, { isLoading }] = useLogoutMutation();
  return (
    <nav className="hidden bg-primary text-primaryDark lg:block">
      <div className="container">
        <div className="flex">
          {/* <!-- all category --> */}
          <div className="flex items-end cursor-pointer group relative h-[60px]">
            <div className="bg-white h-[90%] px-8 flex items-center rounded-t-md">
              <span>
                <i className="fas fa-bars"></i>
              </span>
              <span className="ml-2 capitalize ">All categories</span>
            </div>

            <div className="absolute left-0 z-50 invisible w-full py-3 transition duration-300 bg-white divide-y divide-gray-300 shadow-md opacity-0 top-full group-hover:opacity-100 group-hover:visible divide-dashed">
              {/* <!-- single category --> */}
              <a
                href="#d"
                className="flex items-center px-6 py-3 transition hover:bg-gray-100"
              >
                <img
                  src="images/icons/bed.svg"
                  className="object-contain w-5 h-5"
                  alt=""
                />
                <span className="ml-6 text-sm text-gray-600">Bedroom</span>
              </a>
              {/* <!-- single category end --> */}
              {/* <!-- single category --> */}
              <a
                href="#f"
                className="flex items-center px-6 py-3 transition hover:bg-gray-100"
              >
                <img
                  src="images/icons/sofa.svg"
                  className="object-contain w-5 h-5"
                />
                <span className="ml-6 text-sm text-gray-600">Sofa</span>
              </a>
              {/* <!-- single category end --> */}
              {/* <!-- single category --> */}
              <a
                href="#"
                className="flex items-center px-6 py-3 transition hover:bg-gray-100"
              >
                <img
                  src="images/icons/office.svg"
                  className="object-contain w-5 h-5"
                />
                <span className="ml-6 text-sm text-gray-600">Office</span>
              </a>
              {/* <!-- single category end --> */}
              {/* <!-- single category --> */}
              <a
                href="#"
                className="flex items-center px-6 py-3 transition hover:bg-gray-100"
              >
                <img
                  src="images/icons/terrace.svg"
                  className="object-contain w-5 h-5"
                />
                <span className="ml-6 text-sm text-gray-600">Outdoor</span>
              </a>
              {/* <!-- single category end --> */}
              {/* <!-- single category --> */}
              <a
                href="#"
                className="flex items-center px-6 py-3 transition hover:bg-gray-100"
              >
                <img
                  src="images/icons/bed-2.svg"
                  className="object-contain w-5 h-5"
                />
                <span className="ml-6 text-sm text-gray-600">Mattress</span>
              </a>
              {/* <!-- single category end --> */}
              {/* <!-- single category --> */}
              <a
                href="#"
                className="flex items-center px-6 py-3 transition hover:bg-gray-100"
              >
                <img
                  src="images/icons/restaurant.svg"
                  className="object-contain w-5 h-5"
                />
                <span className="ml-6 text-sm text-gray-600">Sofa</span>
              </a>
              {/* <!-- single category end --> */}
            </div>
          </div>
          {/* <!-- all category end --> */}

          {/* <!-- nav menu --> */}
          <div className="flex items-center justify-between flex-grow pl-12 font-medium text-gray-700 capitalize">
            <div className="flex items-center space-x-6">
              <Link to="/" className="transition hover:text-gray-900">
                Home
              </Link>
              <Link to="/shop" className="transition hover:text-gray-900">
                Shop
              </Link>
              <Link to="/about" className="transition hover:text-gray-900">
                About us
              </Link>
              <Link to="/team" className="transition hover:text-gray-900">
                Team
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 transition hover:text-gray-900"
              >
                Contact us
              </Link>
            </div>
            {!user ? (
              <Link to="/login" className="ml-auto transition justify-self-end">
                Login/Register
              </Link>
            ) : (
              <Menu>
                <div className="relative">
                  <Menu.Button className="flex items-center text-white">
                    <AiOutlineUser /> {user.name}
                    <FaAngleDown className="ml-1" />
                  </Menu.Button>
                  <Menu.Items className="bg-white absolute top-[30px] w-[200px] flex flex-col p-4 rounded space-y-2">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          className={`${active && "text-primary"}`}
                          to="/profile"
                        >
                          Account settings
                        </Link>
                      )}
                    </Menu.Item>
                    {user?.role === "admin" && (
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            className={`${active && "text-primary"}`}
                            to="/admin"
                          >
                            Dashboard
                          </Link>
                        )}
                      </Menu.Item>
                    )}
                    <Menu.Item>
                      {({ active }) => (
                        <span
                          className={`${
                            active && "text-primary cursor-pointer"
                          }`}
                          onClick={logout}
                        >
                          Logout
                        </span>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </div>
              </Menu>
            )}
          </div>
          {/* <!-- nav menu end --> */}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
