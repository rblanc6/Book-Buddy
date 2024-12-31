import { api } from "../../app/api";
import { createSlice } from "@reduxjs/toolkit";

const reservationsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getReservation: builder.query({
      query: () => ({
        url: `/reservations`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        // transformResponse: (response) => response.data.users,
        // transformErrorResponse: (response) => response.data.error,
      }),
      providesTags: ["Book"],
    }),

    deleteReservation: builder.mutation({
      query: ({ id }) => ({
        url: `/reservations/${id}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        //   transformResponse: (response) => response.data.users,
        //   transformErrorResponse: (response) => response.data.error,
      }),
      invalidatesTags: ["Book"],
    }),
  }),
});


// const reservationSlice = createSlice({
//   name: "reservation",
//   initialState: {},
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addMatcher(api.endpoints.register.matchFulfilled, reservationToken);
//   },
// });

// export default reservationSlice.reducer;

export const { useGetReservationQuery, useDeleteReservationMutation } =
  reservationsApi;
