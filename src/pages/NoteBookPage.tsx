import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { NoteBasicContent } from "@/constants";
import formatDateToCustom from "@/util/formatDateToCustom";
import { Note } from "@/types";
import Editor from "@/components/Editor";
import Minus from "@/assets/Minus.svg?react";

const NoteBookPage = () => {
  const location = decodeURI(useLocation().pathname).slice(1);
  const pathName = location.split("-");
  const timer = useRef<number | null>(null);
  const currentNoteBook: Note[] = JSON.parse(
    localStorage.getItem(location) || "[]"
  );

  const [currentNote, setCurrentNote] = useState<Note>();
  const [currentNoteNumber, setCurrentNoteNumber] = useState<number | null>(
    null
  );

  const setCurrentNoteContentFunc = (value: string) => {
    if (currentNoteNumber === null || currentNoteNumber === undefined) return;

    const currentDate = new Date();
    const updatedNote = { content: value, date: currentDate };
    setCurrentNote(updatedNote);

    currentNoteBook[currentNoteNumber] = updatedNote;

    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = window.setTimeout(() => {
      if (timer.current) {
        clearTimeout(timer.current);
        timer.current = null;
      }
      localStorage.setItem(location, JSON.stringify(currentNoteBook));
    }, 500);
  };

  const createNote = () => {
    const currentDate = new Date();
    const newNote = {
      content: NoteBasicContent,
      date: currentDate,
    };

    currentNoteBook.push(newNote);
    setCurrentNoteNumber(currentNoteBook.length - 1);
    localStorage.setItem(location, JSON.stringify(currentNoteBook));
  };

  const deleteNote = (noteNumber: number) => {
    if (currentNoteNumber === null || currentNoteNumber === undefined) return;
    const updatedNoteBook = currentNoteBook.filter(
      (item, index) => index !== noteNumber
    );

    localStorage.setItem(location, JSON.stringify(updatedNoteBook));
    window.location.reload();
  };

  useEffect(() => {
    if (currentNoteBook.length > 0) {
      setCurrentNoteNumber(0);
    } else {
      setCurrentNoteNumber(null);
    }
  }, [location]);

  useEffect(() => {
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  return (
    <div className="flex">
      <div className="border-solid border-r border-gray min-w-[340px] h-dvh">
        <div className="flex justify-between items-center p-[12px] bg-lightGray2 border-b border-solid border-gray">
          {pathName[0]}
          <button
            className="text-[13px] p-[5px] text-[white] bg-main rounded"
            onClick={createNote}
          >
            New Note
          </button>
        </div>
        <ul>
          {currentNoteBook.map((item, index) => (
            <NoteItem
              key={index}
              item={index === currentNoteNumber ? currentNote || item : item}
              active={index === currentNoteNumber}
              onClick={() => {
                setCurrentNoteNumber(index);
              }}
              deleteNote={() => {
                setCurrentNoteNumber(index);
                const userAnswer = confirm("해당 Note를 삭제하시겠습니까?");
                if (userAnswer) deleteNote(index);
              }}
            />
          ))}
        </ul>
      </div>
      <div className="relative w-[400px] flex-auto">
        {(currentNoteNumber || currentNoteNumber === 0) && (
          <Editor
            onChangeFunc={setCurrentNoteContentFunc}
            currentNoteBook={currentNoteBook}
            currentNoteNumber={currentNoteNumber || 0}
            location={location}
          />
        )}
      </div>
    </div>
  );
};

export default NoteBookPage;

const NoteItem = ({
  item,
  onClick,
  deleteNote,
  active,
}: {
  item: Note;
  onClick: () => void;
  deleteNote: () => void;
  active: boolean;
}) => {
  const content = item?.content ? JSON.parse(item.content) : {};
  const formattedDate = formatDateToCustom(new Date(item?.date || ""));
  const [showDelete, setShowDelete] = useState(false);
  const onMouseOver = () => {
    setShowDelete(true);
  };
  const onMouseLeave = () => {
    setShowDelete(false);
  };

  return (
    <li
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      className={`w-[300px] flex gap-[15px] flex-col box-content py-[20px] px-[20px] text-[14px] border-b border-solid border-gray
       relative cursor-pointer ${active && "bg-skyBlue"}`}
      onClick={onClick}
    >
      <div className="font-semibold">
        {content.root?.children?.[0]?.children?.[0]?.text || "New Note"}
      </div>
      <div className="w-[90%] h-[18px] text-ellipsis whitespace-nowrap overflow-hidden text-[gray]">
        {content.root?.children?.[1]?.children?.[0]?.text ||
          "No additional text"}
      </div>
      {showDelete && (
        <button
          className="w-[10px] absolute right-[20px] top-[45%]"
          onClick={() => {
            deleteNote();
          }}
        >
          <Minus className="fill-[gray]" />
        </button>
      )}

      <div className="text-[gray] text-[11px] font-thin">
        {formattedDate || ""}
      </div>
    </li>
  );
};
