import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Toaster } from "react-hot-toast";
import App from "./App";
import { Provider } from "react-redux";
import store from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          // Define default options
          className: "",
          duration: 3500,
          style: {
            background: "#fff",
            color: "#777",
            marginTop: "100px",
          },

          // Default options for specific types
          // success: {
          //   duration: 3000,
          //   theme: {
          //     primary: "green",
          //     secondary: "black",
          //   },
          // },
        }}
      />
      <Provider store={store}>
        <App />
      </Provider>
    </>
  </React.StrictMode>
);
