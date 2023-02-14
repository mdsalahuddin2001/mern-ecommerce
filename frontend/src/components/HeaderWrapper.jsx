import { Outlet } from "react-router-dom";
import Header from "./Header";
const HeaderWrapper = () => {
  return (
    <>
      <Header />
      <div className="py-8">
        <Outlet />
      </div>
    </>
  );
};
export default HeaderWrapper;
