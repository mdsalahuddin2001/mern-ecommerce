import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderWrapper from "./components/HeaderWrapper";
import NotFound from "./components/ui/NotFound";
import { countTotal } from "./features/cart/cartSlice";
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
  Cart,
  Product,
  Shipping,
  PaymentMethod,
  PlaceOrder,
  Order,
  AdminProtect,
  AddProduct,
} from "./pages";

function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // Calculate totals on cartItems change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
    dispatch(countTotal());
  }, [cartItems, dispatch]);

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
              path="/admin"
              element={
                <AdminProtect>
                  <SharedLayout />
                </AdminProtect>
              }
            >
              <Route index element={<Stats />} />
              <Route path="users" element={<Users />} />
              <Route path="products" element={<Products />} />
              <Route path="products/add" element={<AddProduct />} />
              <Route path="orders" element={<Orders />} />
            </Route>
            {/* Wrapper for protected Routes ends */}

            {/* Public routes */}
            <Route path="/" element={<Public />}>
              <Route path="/" element={<HeaderWrapper />}>
                <Route index element={<Home />} />
                <Route path="products/:id" element={<Product />} />
                <Route path="cart" element={<Cart />} />
                <Route path="/" element={<Protect />}>
                  <Route path="shipping" element={<Shipping />} />
                  <Route path="payment-method" element={<PaymentMethod />} />
                  <Route path="place-order" element={<PlaceOrder />} />
                  <Route path="orders/:orderId" element={<Order />} />
                </Route>
              </Route>
              <Route path="forgot-password" element={<ForgotPassword />} />
              <Route path="login" element={<Login />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
