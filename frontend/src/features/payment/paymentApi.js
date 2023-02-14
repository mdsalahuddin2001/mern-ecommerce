import { apiSlice } from "../api/apiSlice";

export const paymentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // add product
    makePayment: builder.mutation({
      query: (orderId) => {
        return {
          url: "/pay",
          method: "POST",
          body: { orderId },
        };
      },
    }),
  }),
});

export const { useMakePaymentMutation } = paymentApi;
