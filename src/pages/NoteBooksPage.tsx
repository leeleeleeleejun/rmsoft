import { NoteCover } from "@/constants";
import { NoteCoverColor } from "@/types";

const NoteBooksPage = () => {
  return (
    <div className="grid grid-cols-5 gap-4 p-[50px]">
      <MemoItem color="green">aaaaaaaaa</MemoItem>
      <MemoItem color="pink">aaaaaaaaa</MemoItem>
      <MemoItem color="pink">aaaaaaaaa</MemoItem>
      <MemoItem color="pink">aaaaaaaaa</MemoItem>
      <MemoItem color="green">aaaaaaaaa</MemoItem>
    </div>
  );
};

export default NoteBooksPage;

const MemoItem = ({
  children,
  color,
}: {
  children: string;
  color: NoteCoverColor;
}) => {
  return (
    <div className="relative text-[15px]">
      <div
        className="absolute w-[100px] h-[30px] p-[6px] text-[white] text-ellipsis whitespace-nowrap overflow-hidden
         bg-opacityBlack bottom-0 rounded-b-[10px] z-10 "
      >
        {children}
      </div>
      <div
        className={`w-[100px] h-[130px] mr-[5px] ${NoteCover[color]} rounded-[10px]`}
      />
    </div>
  );
};
