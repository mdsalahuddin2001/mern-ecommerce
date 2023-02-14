import { apiSlice } from "../api/apiSlice";

import { userLoggedIn, userLoggedOut } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          dispatch(userLoggedOut());
          await queryFulfilled;
        } catch (err) {
          //
        }
      },
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            userLoggedIn({
              accessToken: result.data.accessToken,
              user: result.data.user,
            })
          );
        } catch (err) {
          //
        }
      },
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation } = authApi;
