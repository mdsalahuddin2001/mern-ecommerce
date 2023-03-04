import { Outlet } from "react-router-dom";
import Header from "./Header";
const HeaderWrapper = () => {
  return (
    <>
      <Header />
      <>
        <Outlet />
      </>
    </>
  );
};
export default HeaderWrapper;
