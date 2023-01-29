import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useAuthCheck from "./hooks/useAuthCheck";
import {
  Login,
  Orders,
  Products,
  Protect,
  SharedLayout,
  Stats,
  Users,
  Public,
  ForgotPassword,
  Home,
} from "./pages";

function App() {
  const isDarkMode = useSelector((state) => state.utils.isDarkMode);
  const authChecked = useAuthCheck();

  return !authChecked ? (
    <p>Checking authentication...</p>
  ) : (
    <div className={isDarkMode ? "dark" : ""}>
      <div>
        <BrowserRouter>
          <Routes>
            {/* Wrapper for protected Routes */}
            <Route
              path="/dashboard"
              element={
                <Protect>
                  <SharedLayout />
                </Protect>
              }
            >
              <Route index element={<Stats />} />
              <Route path="users" element={<Users />} />
              <Route path="products" element={<Products />} />
              <Route path="orders" element={<Orders />} />
            </Route>
            {/* Wrapper for protected Routes ends */}

            {/* Public routes */}
            <Route path="/" element={<Public />}>
              <Route index element={<Home />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
              <Route path="login" element={<Login />} />
            </Route>

            <Route path="*" element={<h1>error</h1>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
