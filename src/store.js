import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Global/Auth/authSlice";
import trashReducer from "./Global/Trash/trashSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    trash: trashReducer,
  },
});
