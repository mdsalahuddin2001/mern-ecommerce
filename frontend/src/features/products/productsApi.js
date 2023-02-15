import { apiSlice } from "../api/apiSlice";

export const productsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // fetch products
    getProducts: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
    }),
    // fetch single product
    getProduct: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
    }),
    // add product
    addProduct: builder.mutation({
      query: (data) => {
        return {
          url: "/products",
          method: "POST",
          body: data,
        };
      },
    }),
    // update product
    updateProduct: builder.mutation({
      query: ({ data, id }) => {
        return {
          url: `/products/${id}`,
          method: "PATCH",
          body: data,
        };
      },
    }),
    // add product
    deleteProduct: builder.mutation({
      query: (productId) => {
        return {
          url: `/products/${productId}`,
          method: "DELETE",
        };
      },
      onQueryStarted: async (arg, { queryFulfilled, dispatch }) => {
        // optimistic update
        const patchResult = dispatch(
          apiSlice.util.updateQueryData("getProducts", undefined, (draft) => {
            return {
              products: draft.products.filter((product) => product._id !== arg),
            };
          })
        );
        // optimistic ends
        try {
          await queryFulfilled;
        } catch (error) {
          // undo if fails
          patchResult.undo();
        }
      },
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = productsApi;
