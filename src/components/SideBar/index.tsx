import ChevronRight from "@/assets/ChevronRight.svg?react";
import Plus from "@/assets/Plus.svg?react";
import File from "@/assets/File.svg?react";

const SideBar = () => {
  return (
    <aside className="w-[350px] border-solid border-r border-gray h-dvh">
      <div className="flex py-[30px]">
        <ChevronRight className="mx-[10px] fill-gray2  hover:fill-darkgray" />
        <File className="w-[16px] mr-[10px]" />
        All Notes
      </div>
      <ul className="font-semibold text-main">
        <FakeListItem>QUICK ACCESS</FakeListItem>
        <li className="mb-[20px] cursor-pointer">
          <div className="flex place-content-between">
            <div className="flex">
              <ChevronRight className="mx-[10px] fill-gray2 cursor-pointer hover:fill-darkgray" />
              NOTEBOOKS
            </div>
            <Plus className="mx-[10px] fill-main" />
          </div>
          <ul className="px-[30px] py-[10px]">
            <NoteBook color="red">
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </NoteBook>
            <NoteBook color="pink">
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </NoteBook>
          </ul>
        </li>
        <FakeListItem>TAGS</FakeListItem>
      </ul>
    </aside>
  );
};

export default SideBar;

const NoteBook = ({ children, color }: { children: string; color: string }) => {
  return (
    <li className="flex items-end mb-[10px]">
      <div className={`min-w-[25px] h-[31px] mr-[5px] bg-[${color}] rounded`} />
      <p className="mb-[5px] text-ellipsis whitespace-nowrap overflow-hidden">
        {children}
      </p>
    </li>
  );
};

const FakeListItem = ({ children }: { children: string }) => {
  return (
    <li className="flex mb-[20px] cursor-pointer">
      <ChevronRight className="mx-[10px] fill-gray2  hover:fill-darkgray" />
      {children}
    </li>
  );
};
