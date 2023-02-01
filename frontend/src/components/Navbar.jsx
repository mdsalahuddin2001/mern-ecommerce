import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="bg-primary text-primaryDark hidden lg:block">
      <div class="container">
        <div class="flex">
          {/* <!-- all category --> */}
          <div class="flex items-end cursor-pointer group relative h-[60px]">
            <div className="bg-white h-[90%] px-8 flex items-center rounded-t-md">
              <span>
                <i class="fas fa-bars"></i>
              </span>
              <span class="capitalize ml-2 ">All categories</span>
            </div>

            <div class="absolute left-0 top-full w-full bg-white shadow-md py-3 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition duration-300 z-50 divide-y divide-gray-300 divide-dashed">
              {/* <!-- single category --> */}
              <a
                href="#"
                class="px-6 py-3 flex items-center hover:bg-gray-100 transition"
              >
                <img
                  src="images/icons/bed.svg"
                  class="w-5 h-5 object-contain"
                />
                <span class="ml-6 text-gray-600 text-sm">Bedroom</span>
              </a>
              {/* <!-- single category end --> */}
              {/* <!-- single category --> */}
              <a
                href="#"
                class="px-6 py-3 flex items-center hover:bg-gray-100 transition"
              >
                <img
                  src="images/icons/sofa.svg"
                  class="w-5 h-5 object-contain"
                />
                <span class="ml-6 text-gray-600 text-sm">Sofa</span>
              </a>
              {/* <!-- single category end --> */}
              {/* <!-- single category --> */}
              <a
                href="#"
                class="px-6 py-3 flex items-center hover:bg-gray-100 transition"
              >
                <img
                  src="images/icons/office.svg"
                  class="w-5 h-5 object-contain"
                />
                <span class="ml-6 text-gray-600 text-sm">Office</span>
              </a>
              {/* <!-- single category end --> */}
              {/* <!-- single category --> */}
              <a
                href="#"
                class="px-6 py-3 flex items-center hover:bg-gray-100 transition"
              >
                <img
                  src="images/icons/terrace.svg"
                  class="w-5 h-5 object-contain"
                />
                <span class="ml-6 text-gray-600 text-sm">Outdoor</span>
              </a>
              {/* <!-- single category end --> */}
              {/* <!-- single category --> */}
              <a
                href="#"
                class="px-6 py-3 flex items-center hover:bg-gray-100 transition"
              >
                <img
                  src="images/icons/bed-2.svg"
                  class="w-5 h-5 object-contain"
                />
                <span class="ml-6 text-gray-600 text-sm">Mattress</span>
              </a>
              {/* <!-- single category end --> */}
              {/* <!-- single category --> */}
              <a
                href="#"
                class="px-6 py-3 flex items-center hover:bg-gray-100 transition"
              >
                <img
                  src="images/icons/restaurant.svg"
                  class="w-5 h-5 object-contain"
                />
                <span class="ml-6 text-gray-600 text-sm">Sofa</span>
              </a>
              {/* <!-- single category end --> */}
            </div>
          </div>
          {/* <!-- all category end --> */}

          {/* <!-- nav menu --> */}
          <div class="flex items-center justify-between flex-grow pl-12 font-medium capitalize text-gray-700">
            <div class="flex items-center space-x-6">
              <Link to="/" class="transition hover:text-gray-900">
                Home
              </Link>
              <Link to="/products" class="transition hover:text-gray-900">
                Shop
              </Link>
              <Link to="/about" class="transition hover:text-gray-900">
                About us
              </Link>
              <Link
                to="/contact"
                class="transition hover:text-gray-900 text-gray-700"
              >
                Contact us
              </Link>
            </div>
            <a href="login.html" class="ml-auto justify-self-end  transition">
              Login/Register
            </a>
          </div>
          {/* <!-- nav menu end --> */}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
