import { configureStore } from "@reduxjs/toolkit";
import NoteBooksSlice from "@/components/SideBar/NoteBooksSlice";

export const store = configureStore({
  reducer: { NoteBooksSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
