import { apiSlice } from "../api/apiSlice";

export const ordersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrder: builder.query({
      query: (orderId) => ({
        url: `/orders/${orderId}`,
        method: "GET",
      }),
    }),
    getMyOrders: builder.query({
      query: () => ({
        url: `/orders/mine`,
        method: "GET",
      }),
    }),
    getOrders: builder.query({
      query: () => ({
        url: `/orders`,
        method: "GET",
      }),
    }),
    placeOrder: builder.mutation({
      query: (data) => ({
        url: "/orders",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  usePlaceOrderMutation,
  useGetOrderQuery,
  useGetMyOrdersQuery,
  useGetOrdersQuery,
} = ordersApi;
