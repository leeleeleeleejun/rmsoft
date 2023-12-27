import { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "@/components/SideBar";
import CreateNoteBookModal from "@/components/CreateNoteBookModal";

const Layout = () => {
  const [CreateNewNoteBookModal, setCreateNewNoteBookModal] =
    useState<boolean>(false);

  const openNoteBookModalFunc = () => {
    setCreateNewNoteBookModal(true);
  };

  const closeNoteBookModalFunc = () => {
    setCreateNewNoteBookModal(false);
  };

  return (
    <div className="flex min-w-[1400px] max-w-[1920px] m-auto">
      {CreateNewNoteBookModal && (
        <CreateNoteBookModal closeNoteBookModalFunc={closeNoteBookModalFunc} />
      )}
      <SideBar openNoteBookModalFunc={openNoteBookModalFunc} />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
