import { Link } from "react-router-dom";
import Logo from "../Logo";

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen pt-16 pb-12 bg-white">
      <main className="flex flex-col justify-center flex-grow w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-center flex-shrink-0">
          <Link to="/" className="inline-flex">
            <span className="sr-only">Logo</span>
            <Logo />
          </Link>
        </div>
        <div className="py-16">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-wide uppercase text-primary">
              404 error
            </p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Page not found.
            </h1>
            <p className="mt-2 text-base text-gray-500">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-6">
              <Link
                to="/"
                className="text-base font-medium text-primary hover:text-primaryHover"
              >
                Go back home<span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <footer className="flex-shrink-0 w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex justify-center space-x-4">
          <Link
            to="/contact"
            className="text-sm font-medium text-gray-500 hover:text-gray-600"
          >
            Contact
          </Link>
          <span
            className="inline-block border-l border-gray-300"
            aria-hidden="true"
          />
          <Link
            to="/about"
            className="text-sm font-medium text-gray-500 hover:text-gray-600"
          >
            About
          </Link>
        </nav>
      </footer>
    </div>
  );
};
export default NotFound;
