import { NavLink, Outlet } from "react-router-dom";
const ProfileLayout = () => {
  return (
    <main>
      <div className="container grid grid-cols-[300px_1fr] gap-8">
        <div>
          <aside className="p-4 bg-white rounded shadow-cardShadow">
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
          </aside>
        </div>
        <div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
};
export default ProfileLayout;
