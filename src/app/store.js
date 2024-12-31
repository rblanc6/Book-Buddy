import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import registerSlice from "../components/Register/RegisterSlice";
import loginSlice from "../components/Login/LoginSlice";
import confirmLoginReducer from "./confirmLoginSlice";
// import reservationSlice from "../components/Reservations/ReservationSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    register: registerSlice,
    login: loginSlice,
    confirmLogin: confirmLoginReducer,
    // reservation: reservationSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
