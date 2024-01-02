import { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "@/components/SideBar";
import CreateNoteBookModal from "@/components/CreateNoteBookModal";
import { setEditNumber } from "@/components/CreateNoteBookModal/CreateNoteBookModalSlice";
import { useDispatch } from "react-redux";

const Layout = () => {
  const dispatch = useDispatch();

  const [CreateNewNoteBookModal, setCreateNewNoteBookModal] =
    useState<boolean>(false);

  const openNoteBookModalFunc = () => {
    setCreateNewNoteBookModal(true);
  };

  const closeNoteBookModalFunc = () => {
    dispatch(setEditNumber(null));
    setCreateNewNoteBookModal(false);
  };

  return (
    <div className="flex min-w-[1400px] max-w-[1920px] m-auto">
      {CreateNewNoteBookModal && (
        <CreateNoteBookModal closeNoteBookModalFunc={closeNoteBookModalFunc} />
      )}
      <SideBar openNoteBookModalFunc={openNoteBookModalFunc} />
      <main className="flex-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
