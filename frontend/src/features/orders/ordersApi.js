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

    changeStatus: builder.mutation({
      query: ({ status, id }) => ({
        url: `/orders/status/${id}`,
        method: "POST",
        body: { status },
      }),
      onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
        const { status, id } = arg;
        const patchResult = dispatch(
          apiSlice.util.updateQueryData("getOrders", undefined, (draft) => {
            draft.orders = draft.orders.map((order) =>
              order._id === id ? { ...order, status } : order
            );
          })
        );
        try {
          await queryFulfilled;
        } catch (error) {
          patchResult.undo();
        }
      },
    }),
  }),
});

export const {
  usePlaceOrderMutation,
  useGetOrderQuery,
  useGetMyOrdersQuery,
  useGetOrdersQuery,
  useChangeStatusMutation,
} = ordersApi;
