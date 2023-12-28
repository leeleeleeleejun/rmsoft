import ChevronRight from "@/assets/ChevronRight.svg?react";
import ChevronDown from "@/assets/ChevronDown.svg?react";
import Plus from "@/assets/Plus.svg?react";
import File from "@/assets/File.svg?react";
import { NoteBook, NoteCoverColor } from "@/types";
import { NoteCover } from "@/constants";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setNoteBooks } from "./NoteBooksSlice";

const SideBar = ({
  openNoteBookModalFunc,
}: {
  openNoteBookModalFunc: () => void;
}) => {
  const dispatch = useDispatch();

  const noteBooks = useSelector((state: RootState) => state.NoteBooksSlice);
  const [showNoteBooks, setShowNoteBooks] = useState(false);

  const setShowNoteBooksFunc = () => {
    setShowNoteBooks((prev) => !prev);
  };

  console.log(noteBooks);

  useEffect(() => {
    const localStorageNoteBooks: NoteBook[] = JSON.parse(
      localStorage.getItem("noteBooks") || "[]"
    );
    dispatch(setNoteBooks(localStorageNoteBooks));
  }, []);

  return (
    <aside className="min-w-[350px] max-w-[350px] h-dvh border-solid border-r border-gray">
      <div className="flex py-[30px]">
        <button className="mx-[10px] fill-gray2  hover:fill-darkGray">
          <ChevronRight />
        </button>
        <File className="w-[16px] mr-[10px]" />
        All Notes
      </div>
      <ul className="font-semibold text-main">
        <FakeListItem>QUICK ACCESS</FakeListItem>
        <li className="mb-[20px] cursor-pointer">
          <div className="flex place-content-between">
            <div className="flex">
              <button
                className="w-[10px] mx-[10px] fill-gray2 cursor-pointer hover:fill-darkGray"
                onClick={setShowNoteBooksFunc}
              >
                {showNoteBooks ? <ChevronDown /> : <ChevronRight />}
              </button>
              NOTEBOOKS
            </div>
            <Plus
              className="mx-[10px] fill-main"
              onClick={openNoteBookModalFunc}
            />
          </div>
          {showNoteBooks && (
            <ul className="px-[30px] py-[10px]">
              {noteBooks.map((item, index) => (
                <NoteBook key={index} cover={item.cover}>
                  {item.name}
                </NoteBook>
              ))}
            </ul>
          )}
        </li>
        <FakeListItem>TAGS</FakeListItem>
      </ul>
    </aside>
  );
};

export default SideBar;

const NoteBook = ({
  children,
  cover,
}: {
  children: string;
  cover: NoteCoverColor;
}) => {
  return (
    <li className="flex items-end mb-[10px]">
      <div
        className={`min-w-[25px] h-[31px] mr-[5px] ${NoteCover[cover]} rounded`}
      />
      <p className="mb-[5px] text-ellipsis whitespace-nowrap overflow-hidden">
        {children}
      </p>
    </li>
  );
};

const FakeListItem = ({ children }: { children: string }) => {
  return (
    <li className="flex mb-[20px] cursor-pointer">
      <ChevronRight className="mx-[10px] fill-gray2  hover:fill-darkGray" />
      {children}
    </li>
  );
};
