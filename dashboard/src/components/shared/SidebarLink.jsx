import { NavLink } from "react-router-dom";

const SidebarLink = ({ route }) => {
  const { name, link, icon } = route;

  const activeClasses = "bg-primary text-white rounded-sm";
  const commonClasses =
    "flex items-center space-x-2 px-4 py-2 hover:bg-primary hover:text-white hover:rounded-sm transition-all";
  return (
    <NavLink
      to={link}
      className={({ isActive }) => {
        return isActive
          ? `${commonClasses} ${activeClasses}`
          : `${commonClasses}`;
      }}
      end
    >
      {icon} <span>{name}</span>
    </NavLink>
  );
};
export default SidebarLink;
