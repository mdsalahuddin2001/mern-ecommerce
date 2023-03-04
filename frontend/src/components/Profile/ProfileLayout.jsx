import { NavLink, Outlet } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
const ProfileLayout = () => {
  return (
    <main>
      <div className="container mt-12 md:flex">
        {/* <aside className="p-4 bg-white rounded shadow-cardShadow">
            <div className="flex items-center justify-center">
              <img
                src="https://image.shutterstock.com/image-photo/stock-photo-portrait-of-smiling-red-haired-millennial-man-looking-at-camera-sitting-in-caf-or-coffeeshop-250nw-1194497251.jpg"
                className="h-[80px] w-[80px] rounded-full object-cover"
                alt=""
              />
            </div>
            <h4 className="mt-4 text-lg font-semibold text-center">
              MD Salahuddin
            </h4>
            <div className="mt-6">
              <p className="mb-4 text-lg font-semibold">Menu</p>
              <div className="flex flex-col space-y-2">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "block px-1 py-2 rounded  text-white bg-black"
                      : "block px-1 py-2 rounded hover:text-white hover:bg-black"
                  }
                  to="/profile"
                  end
                >
                  Profile
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "block px-1 py-2 rounded  text-white bg-black"
                      : "block px-1 py-2 rounded hover:text-white hover:bg-black"
                  }
                  to="/profile/orders"
                >
                  Orders
                </NavLink>
              </div>
            </div>
          </aside> */}
        <div className="lg:w-1/4 md:w-1/3 md:px-3">
          <div className="relative">
            <div className="p-6 bg-white rounded-md shadow dark:shadow-gray-800 dark:bg-slate-900">
              <div className="mb-5 text-center">
                <div className="flex items-center justify-center">
                  <img
                    src="https://image.shutterstock.com/image-photo/stock-photo-portrait-of-smiling-red-haired-millennial-man-looking-at-camera-sitting-in-caf-or-coffeeshop-250nw-1194497251.jpg"
                    className="h-[80px] w-[80px] rounded-full object-cover"
                    alt=""
                  />
                </div>
                <div>
                  <div className="mt-4">
                    <h5 className="text-lg font-semibold">Jenny Jimenez</h5>
                    <p className="text-slate-400">jennyhot@hotmail.com</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-100 dark:border-gray-700">
                <ul
                  className="mt-3 mb-0 space-y-1 list-none sidebar-nav"
                  id="navmenu-nav"
                >
                  <li className="navbar-item account-menu">
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "block px-1 py-2 rounded  text-white bg-[#333]"
                          : "block px-1 py-2 rounded hover:text-white hover:bg-[#333]"
                      }
                      to="/profile"
                      end
                    >
                      Profile
                    </NavLink>
                  </li>
                  <li className="navbar-item account-menu">
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "block px-1 py-2 rounded  text-white bg-[#333]"
                          : "block px-1 py-2 rounded hover:text-white hover:bg-[#333]"
                      }
                      to="/profile/orders"
                    >
                      Orders
                    </NavLink>
                  </li>
                  <li className="navbar-item account-menu">
                    <button className="flex items-center w-full px-1 py-2 rounded hover:text-white hover:bg-[#333]">
                      <FiLogOut className="mr-1 text-lg" /> Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-3/4 md:w-2/3 md:px-3 mt-[30px] md:mt-0">
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
};
export default ProfileLayout;
