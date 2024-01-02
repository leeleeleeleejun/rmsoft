import { NoteCover } from "@/constants";
import { NoteCoverItemProps } from "@/types";
import Check from "@/assets/Check.svg?react";

const NoteCoverItem = ({
  cover,
  chooseCover,
  setNoteBookFunc,
}: NoteCoverItemProps) => {
  return (
    <li>
      <button
        className={`w-[70px] h-[90px] mr-[5px] ${NoteCover[cover]} rounded-[10px] cursor-pointer`}
        onClick={() => {
          setNoteBookFunc("cover", cover);
        }}
      >
        <div
          className={`${
            chooseCover === cover ? "flex" : "hidden"
          } justify-center items-center w-[25px] h-[25px] m-auto bg-opacityBlack rounded-[50%]`}
        >
          <Check className="fill-[white]" />
        </div>
      </button>
    </li>
  );
};

export default NoteCoverItem;
