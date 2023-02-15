import { apiSlice } from "../api/apiSlice";

export const uploadApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // upload image, here data is FormData
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
