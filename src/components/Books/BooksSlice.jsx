import { api } from "../../app/api";

const booksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => ({
        url: "/books",
        method: "GET",
        transformResponse: (response) => response.data.players,
        transformErrorResponse: (response) => response.data.error,
      }),
      providesTags: ["Book"],
    }),
  }),
});

export const { useGetBooksQuery } = booksApi;
