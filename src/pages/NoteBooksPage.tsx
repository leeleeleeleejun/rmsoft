import { NoteCover } from "@/constants";
import { NoteCoverColor } from "@/types";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NoteBooksPage = () => {
  const noteBooks = useSelector((state: RootState) => state.NoteBooksSlice);

  return (
    <div className="grid grid-cols-5 gap-4 p-[50px] max-w-[700px]">
      {noteBooks.map((item, index) => (
        <Link to={item.name + "-" + item.date} key={index}>
          <NoteBookItem cover={item.cover}>{item.name}</NoteBookItem>
        </Link>
      ))}
    </div>
  );
};

export default NoteBooksPage;

const NoteBookItem = ({
  children,
  cover,
}: {
  children: string;
  cover: NoteCoverColor;
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
        className={`w-[100px] h-[130px] mr-[5px] ${NoteCover[cover]} rounded-[10px]`}
      />
    </div>
  );
};
