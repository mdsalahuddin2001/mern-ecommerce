import { useSelector } from "react-redux";
import Logo from "../Logo";
import SidebarLinks from "./SidebarLinks";

const Sidebar = () => {
  const isSidebarOpen = useSelector((state) => state.utils.isSidebarOpen);

  return (
    <aside
      className={`bg-white dark:bg-primaryDark text-primaryDark dark:text-white min-h-screen h-full w-[250px]   transition-all ${
        isSidebarOpen ? "ml-0" : "ml-[-250px]"
      }`}
    >
      {/* sidebar header */}
      <div className="h-[80px] flex items-center justify-center">
        <Logo />
      </div>
      {/* sidebar links */}
      <SidebarLinks />
    </aside>
  );
};
export default Sidebar;
