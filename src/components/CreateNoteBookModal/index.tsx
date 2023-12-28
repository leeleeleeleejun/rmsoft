import Close from "@/assets/Close.svg?react";
import { NoteCover } from "@/constants";
import { NoteCoverColor } from "@/types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setNoteBooks } from "../SideBar/NoteBooksSlice";

const CreateNoteBookModal = ({
  closeNoteBookModalFunc,
}: {
  closeNoteBookModalFunc: () => void;
}) => {
  const dispatch = useDispatch();
  const [noteBook, setNoteBook] = useState({ name: "", cover: "" });

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

    const current = new Date().toISOString();
    const newNoteBook = { ...noteBook, date: current };
    dispatch(setNoteBooks([newNoteBook]));

    const localStorageNoteBooks = JSON.parse(
      localStorage.getItem("noteBooks") || "[]"
    );
    if (localStorageNoteBooks) {
      localStorage.setItem(
        "noteBooks",
        JSON.stringify([...localStorageNoteBooks, noteBook])
      );
    } else {
      localStorage.setItem("noteBooks", JSON.stringify([noteBook]));
    }
    closeNoteBookModalFunc();
  };

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
          />
        </div>
        <div className="flex py-[30px]">
          <span className="font-semibold mr-[80px]">Cover</span>
          <div className="grid grid-cols-5 gap-4 ">
            <NoteCoverItem color="red" setNoteBookFunc={setNoteBookFunc} />
            <NoteCoverItem color="orange" setNoteBookFunc={setNoteBookFunc} />
            <NoteCoverItem color="yellow" setNoteBookFunc={setNoteBookFunc} />
            <NoteCoverItem color="green" setNoteBookFunc={setNoteBookFunc} />
            <NoteCoverItem color="blue" setNoteBookFunc={setNoteBookFunc} />
            <NoteCoverItem color="indigo" setNoteBookFunc={setNoteBookFunc} />
            <NoteCoverItem color="purple" setNoteBookFunc={setNoteBookFunc} />
            <NoteCoverItem color="pink" setNoteBookFunc={setNoteBookFunc} />
            <NoteCoverItem color="gray" setNoteBookFunc={setNoteBookFunc} />
          </div>
        </div>
        <button className="ml-auto" onClick={registerNoteBook}>
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateNoteBookModal;

const NoteCoverItem = ({
  color,
  setNoteBookFunc,
}: {
  color: NoteCoverColor;
  setNoteBookFunc: (key: "name" | "cover", value: string) => void;
}) => {
  return (
    <button
      className={`w-[70px] h-[90px] mr-[5px] ${NoteCover[color]} rounded-[10px] cursor-pointer`}
      onClick={() => {
        setNoteBookFunc("cover", color);
      }}
    />
  );
};
