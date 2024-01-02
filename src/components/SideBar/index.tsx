import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { NoteBookType } from "@/types";
import { setNoteBooks } from "./NoteBooksSlice";
import { useNavigate } from "react-router-dom";

import NoteBook from "./NoteBook";
import Plus from "@/assets/Plus.svg?react";
import File from "@/assets/File.svg?react";
import ChevronDown from "@/assets/ChevronDown.svg?react";
import ChevronRight from "@/assets/ChevronRight.svg?react";

const SideBar = ({
  openNoteBookModalFunc,
}: {
  openNoteBookModalFunc: () => void;
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = decodeURI(useLocation().pathname).slice(1);
  const noteBooks = useSelector((state: RootState) => state.NoteBooksSlice);

  const [showNoteBooks, setShowNoteBooks] = useState(true);
  const [showMenu, setShowMenu] = useState<number | null>(null);

  const setShowNoteBooksFunc = () => {
    setShowNoteBooks((prev) => !prev);
  };

  useEffect(() => {
    const localStorageNoteBooks: NoteBookType[] = JSON.parse(
      localStorage.getItem("noteBooks") || "[]"
    );
    dispatch(setNoteBooks(localStorageNoteBooks));
  }, []);

  useEffect(() => {
    if (!localStorage.getItem(location)) navigate("/");
  }, [noteBooks]);

  return (
    <aside className="min-w-[350px] max-w-[350px] h-dvh border-solid border-r border-gray">
      <div className="flex pt-[12px] pb-[30px]">
        <button className="mx-[10px] fill-gray2  hover:fill-darkGray">
          <ChevronRight />
        </button>
        <File className="w-[16px] mr-[10px]" />
        All Notes
        <span className="ml-[5px] text-[darkGray] text-[14px]">
          {noteBooks.length}
        </span>
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
              <Link to="/" className="hover:text-mainHover">
                NOTEBOOKS
              </Link>
            </div>
            <Plus
              className="mx-[10px] fill-main"
              onClick={openNoteBookModalFunc}
            />
          </div>
          {noteBooks.length > 0 && showNoteBooks && (
            <ul className="px-[30px] py-[10px]">
              {noteBooks.map((item, index) => (
                <NoteBook
                  showMenu={showMenu}
                  setShowMenu={setShowMenu}
                  key={index}
                  item={item}
                  index={index}
                  openNoteBookModalFunc={openNoteBookModalFunc}
                >
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

const FakeListItem = ({ children }: { children: string }) => {
  return (
    <li className="flex mb-[20px] cursor-pointer">
      <ChevronRight className="mx-[10px] fill-gray2  hover:fill-darkGray" />
      {children}
    </li>
  );
};
