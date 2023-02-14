import { FaAlignLeft } from "react-icons/fa";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedOut } from "../../features/auth/authSlice";
import { toggleDarkMode, toggleSidebar } from "../../features/utils/utilsSlice";

const Navbar = () => {
  const isDarkMode = useSelector((state) => state.utils.isDarkMode);
  const dispatch = useDispatch();

  //   toggle sidebar
  const handleToggleSidebar = () => dispatch(toggleSidebar());

  // handle toggle dark mode
  const handleToggleDarkMode = () => dispatch(toggleDarkMode());
  return (
    <nav className="h-[80px] bg-white dark:bg-primaryDark flex items-center">
      <div className="flex items-center justify-between w-full px-4">
        <button
          className="toggle-btn"
          type="button"
          onClick={handleToggleSidebar}
        >
          <FaAlignLeft className="text-lg text-primary" />
        </button>
        <div className="space-x-4">
          <button onClick={handleToggleDarkMode}>
            {isDarkMode ? (
              <BsSunFill className="text-lg text-white" />
            ) : (
              <BsFillMoonFill className="text-lg text-textPrimary" />
            )}
          </button>
          <button onClick={() => dispatch(userLoggedOut())}>
            <FiLogIn
              className={`text-lg ${
                isDarkMode ? "text-white" : "text-textPrimary"
              }`}
            />
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
