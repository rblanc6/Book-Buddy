import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import registerSlice from "../components/Register/RegisterSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    register: registerSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
