import { configureStore } from "@reduxjs/toolkit";
import NoteBooksSlice from "@/components/SideBar/NoteBooksSlice";
import CreateNoteBookModalSlice from "@/components/CreateNoteBookModal/CreateNoteBookModalSlice";

export const store = configureStore({
  reducer: { NoteBooksSlice, CreateNoteBookModalSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
