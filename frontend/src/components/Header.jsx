import { Link } from "react-router-dom";
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";
import logo from "../assets/logo.png";
import { FiShoppingBag } from "react-icons/fi";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <>
      <header className="py-4  shadow-sm bg-white">
        <div className="container flex items-center justify-between">
          {/* <!-- logo --> */}
          <Link to="/" className="block w-10">
            <img src={logo} alt="logo" className="w-full" />
          </Link>
          {/* <!-- logo end --> */}

          {/* <!-- searchbar --> */}
          <div className="relative hidden w-full xl:max-w-xl lg:max-w-lg lg:flex">
            <span className="absolute text-lg text-gray-400 top-1/2 left-4 -translate-y-1/2">
              <AiOutlineSearch className="text-xl" />
            </span>
            <input
              type="text"
              className="w-full px-3 py-3 pl-12 border border-r-0 border-primary rounded-l-md focus:outline-primary focus:border-primary"
              placeholder="Search product..."
            />
            <button
              type="submit"
              className="px-8 font-medium text-white transition border bg-primary border-primary rounded-r-md"
            >
              Search
            </button>
          </div>
          {/* <!-- searchbar end --> */}

          {/* <!-- navicons --> */}
          <div className="flex items-center space-x-4">
            <Link
              to="/wishlist"
              className="flex flex-col justify-center items-center text-center  transition hover:text-primary space-y-1"
            >
              <div className="relative">
                <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white rounded-full left-4 -top-2 bg-primary">
                  5
                </span>
                <div className="text-2xl">
                  <AiOutlineHeart />
                </div>
              </div>
              <div className="text-xs leading-3">Wish List</div>
            </Link>
            <Link
              to="/cart"
              className="flex flex-col justify-center items-center text-center  transition hover:text-primary space-y-1"
            >
              <div className="relative">
                <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white rounded-full left-4 -top-2 bg-primary">
                  3
                </span>
                <div className="text-2xl">
                  <FiShoppingBag />
                </div>
              </div>

              <div className="text-xs leading-3">Cart</div>
            </Link>
            <Link
              href="/profile"
              className="flex flex-col justify-center items-center text-center  transition hover:text-primary space-y-1"
            >
              <div className="text-2xl">
                <RiAccountCircleLine />
              </div>
              <div className="text-xs leading-3">Account</div>
            </Link>
          </div>
          {/* <!-- navicons end --> */}
        </div>
      </header>
      <Navbar />
    </>
  );
};
export default Header;
