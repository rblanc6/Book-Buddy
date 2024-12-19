import { api } from "../../app/api";

const bookDetailsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBook: builder.query({
      query: (id) => ({
        url: `/books/${id}`,
        method: "GET",
        transformResponse: (response) => response.data.players,
        transformErrorResponse: (response) => response.data.error,
      }),
      providesTags: ["Book"],
    }),
  }),
});

export const { useGetBookQuery } = bookDetailsApi;
