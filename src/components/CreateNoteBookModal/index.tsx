import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { NoteCoverColor } from "@/types";
import { setNoteBooks } from "@/components/SideBar/NoteBooksSlice";

import Close from "@/assets/Close.svg?react";
import NoteCoverItem from "./NoteCoverItem";

const CreateNoteBookModal = ({
  closeNoteBookModalFunc,
}: {
  closeNoteBookModalFunc: () => void;
}) => {
  const dispatch = useDispatch();
  const editNumber = useSelector(
    (state: RootState) => state.CreateNoteBookModalSlice
  ).editNumber;
  const editTargetKey = useSelector(
    (state: RootState) => state.CreateNoteBookModalSlice
  ).editTargetKey;
  const noteBooks = useSelector((state: RootState) => state.NoteBooksSlice);
  const [noteBook, setNoteBook] = useState({ name: "", cover: "red" });

  const setNoteBookFunc = (key: "name" | "cover", value: string) => {
    setNoteBook((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const registerNoteBook = () => {
    if (!noteBook.name) {
      alert("name을 입력해주세요");
      return;
    }
    if (!noteBook.cover) {
      alert("cover을 선택해주세요");
      return;
    }

    const createDate = String(Date.now());

    const newNoteBook = { ...noteBook, date: createDate };
    const newNoteBooks = [...noteBooks, newNoteBook];
    dispatch(setNoteBooks(newNoteBooks));

    localStorage.setItem("noteBooks", JSON.stringify(newNoteBooks));
    localStorage.setItem(noteBook.name + "-" + createDate, JSON.stringify([]));

    closeNoteBookModalFunc();
  };

  const editNoteBook = () => {
    if (!noteBook.name) {
      alert("name을 입력해주세요");
      return;
    }
    if (!noteBook.cover) {
      alert("cover을 선택해주세요");
      return;
    }
    const newNoteBooks = noteBooks.map((item, index) => {
      if (index === editNumber) {
        return noteBook;
      }
      return item;
    });
    dispatch(setNoteBooks(newNoteBooks));
    localStorage.setItem("noteBooks", JSON.stringify(newNoteBooks));
    const oldData = localStorage.getItem(editTargetKey);
    const date = editTargetKey.split("-");
    localStorage.setItem(noteBook.name + "-" + date[1], oldData || "");
    localStorage.removeItem(editTargetKey);
    closeNoteBookModalFunc();
  };

  useEffect(() => {
    if (editNumber || editNumber === 0) {
      setNoteBook(noteBooks[editNumber]);
    }
  }, []);

  return (
    <div className="w-[100%] h-screen fixed bg-[#00000073] flex items-center z-20">
      <div className="relative flex flex-col bg-[white] m-auto p-[30px] rounded">
        <button
          className="absolute top-[15px] right-[20px]"
          onClick={closeNoteBookModalFunc}
        >
          <Close />
        </button>
        <div className="font-semibold text-center text-[20px] mb-[20px]">
          Create New Notebook
        </div>
        <div>
          <span className="font-semibold mr-[80px]">Name</span>
          <input
            className="w-[400px] p-[10px] bg-lightGray rounded text-[14px] outline-none"
            placeholder="Enter notebook name"
            type="text"
            onChange={(e) => {
              setNoteBookFunc("name", e.target.value);
            }}
            value={noteBook.name}
          />
        </div>
        <div className="flex py-[30px]">
          <span className="font-semibold mr-[80px]">Cover</span>
          <ul className="grid grid-cols-5 gap-4 ">
            {coverArray.map((item) => (
              <NoteCoverItem
                key={item}
                cover={item}
                setNoteBookFunc={setNoteBookFunc}
                chooseCover={noteBook.cover}
              />
            ))}
          </ul>
        </div>
        <button
          className={`px-[18px] py-[8px] border-solid border-[darkGray] ml-auto text-[14px] rounded 
          ${
            noteBook.name && noteBook.cover
              ? "bg-main text-[white]"
              : "border-[1px] text-[darkGray]"
          }`}
          onClick={editNumber !== null ? editNoteBook : registerNoteBook}
        >
          {editNumber !== null ? "Update" : "Create"}
        </button>
      </div>
    </div>
  );
};

export default CreateNoteBookModal;

const coverArray: NoteCoverColor[] = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
  "gray",
];
