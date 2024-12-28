import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import registerSlice from "../components/Register/RegisterSlice";
import loginSlice from "../components/Login/LoginSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    register: registerSlice,
    login: loginSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
