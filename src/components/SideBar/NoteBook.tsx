import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NoteCover } from "@/constants";
import { NoteBookProps } from "@/types";
import { RootState } from "@/store";
import { setNoteBooks } from "./NoteBooksSlice";
import {
  setEditNumber,
  setEditTargetKey,
} from "@/components/CreateNoteBookModal/CreateNoteBookModalSlice";
import Menu from "./Menu";
import Ellipsis from "@/assets/Ellipsis.svg?react";

const NoteBook = ({
  showMenu,
  setShowMenu,
  children,
  item,
  index,
  openNoteBookModalFunc,
}: NoteBookProps) => {
  const dispatch = useDispatch();
  const noteBooks = useSelector((state: RootState) => state.NoteBooksSlice);
  const noteKey = item.name + "-" + item.date;
  const location = decodeURI(useLocation().pathname).slice(1);

  const [showMenuButton, setShowMenuButton] = useState(false);

  const onMouseOver = () => {
    setShowMenuButton(true);
  };
  const onMouseLeave = () => {
    setShowMenuButton(false);
  };

  const deleteNoteBook = (name: string, date: string) => {
    const newNoteBooks = noteBooks.filter((item) => {
      if (item.name === name && item.date === date) {
        localStorage.removeItem(noteKey);
        return false;
      }
      return true;
    });

    dispatch(setNoteBooks(newNoteBooks));
    localStorage.setItem("noteBooks", JSON.stringify(newNoteBooks));
    setShowMenu(null);
  };

  const setEditNumberFunc = (index: number) => {
    dispatch(setEditNumber(index));
    dispatch(setEditTargetKey(noteKey));
    openNoteBookModalFunc();
    setShowMenu(null);
  };

  return (
    <li onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      <Link
        to={noteKey}
        key={index}
        className="flex justify-between items-center mb-[10px] relative "
      >
        <div className="flex items-end">
          <div
            className={`min-w-[25px] h-[31px] mr-[5px] ${
              NoteCover[item.cover]
            } rounded`}
          />
          <p
            className={`h-[20px] mb-[5px] text-ellipsis whitespace-nowrap overflow-hidden max-w-[245px] ${
              noteKey === location ? "font-semibold" : "font-medium"
            }`}
          >
            {children}
          </p>
        </div>
        {showMenuButton && (
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowMenu(index);
            }}
          >
            <Ellipsis className="fill-darkGray" />
          </button>
        )}
        <Menu
          showMenu={showMenu === index}
          deleteNoteBook={() => {
            const userAnswer = confirm("해당 NoteBook을 삭제하시겠습니까?");
            if (userAnswer) deleteNoteBook(item.name, item.date);
          }}
          setEditNumberFunc={() => {
            setEditNumberFunc(index);
          }}
          setShowMenu={setShowMenu}
        />
      </Link>
    </li>
  );
};

export default NoteBook;
