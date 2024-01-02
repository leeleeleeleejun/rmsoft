import Close from "@/assets/Close.svg?react";
import { SideBarItemMenuProps } from "@/types";

const Menu = ({
  showMenu,
  deleteNoteBook,
  setEditNumberFunc,
  setShowMenu,
}: SideBarItemMenuProps) => {
  return (
    <ul
      className={`${
        showMenu ? "block" : "hidden"
      } absolute right-[-25px] bottom-[-55px] text-[14px] text-[black] font-light 
      bg-[white] border-solid border-gray border-[1px] shadow-2xl rounded z-10`}
    >
      <li
        className="border-solid border-gray border-b-[1px]"
        onClick={(e) => {
          e.preventDefault();
          setShowMenu(null);
        }}
      >
        <Close className="w-[10px] m-auto" />
      </li>
      <li
        className="p-[7px] text-center border-solid border-gray border-b-[1px]"
        onClick={setEditNumberFunc}
      >
        Edit
      </li>
      <li
        className="p-[7px] text-center"
        onClick={(e) => {
          e.preventDefault();
          deleteNoteBook();
        }}
      >
        Delete
      </li>
    </ul>
  );
};

export default Menu;
