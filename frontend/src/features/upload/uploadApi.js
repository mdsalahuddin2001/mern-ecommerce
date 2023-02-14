import { apiSlice } from "../api/apiSlice";

export const uploadApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // add product
    upload: builder.mutation({
      query: (data) => {
        return {
          url: "/upload",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useUploadMutation } = uploadApi;
