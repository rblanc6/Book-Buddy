import { api } from "../../app/api";

const booksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => ({
        url: "/books",
        method: "GET",
        transformResponse: (response) => response.data.books,
        transformErrorResponse: (response) => response.data.error,
      }),
      providesTags: ["Book"],
    }),
  }),
});

export const { useGetBooksQuery } = booksApi;
