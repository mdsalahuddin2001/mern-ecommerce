import routes from "../../data/routes";
import SidebarLink from "./SidebarLink";
const SidebarLinks = () => {
  return (
    <ul className="py-8">
      {routes.map((route) => {
        return <SidebarLink key={route.id} route={route} />;
      })}
    </ul>
  );
};
export default SidebarLinks;
