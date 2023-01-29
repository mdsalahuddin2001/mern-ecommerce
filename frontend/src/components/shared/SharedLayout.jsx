import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const SharedLayout = () => {
  return (
    <section>
      <main className="flex">
        <Sidebar />
        <div className="flex-grow">
          <Navbar />
          <div className="w-full p-4">
            <Outlet />
          </div>
        </div>
      </main>
    </section>
  );
};
export default SharedLayout;
