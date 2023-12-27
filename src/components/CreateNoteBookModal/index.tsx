import Close from "@/assets/Close.svg?react";
import { NoteCover } from "@/constants";
import { NoteCoverColor } from "@/types";

const CreateNoteBookModal = ({
  closeNoteBookModalFunc,
}: {
  closeNoteBookModalFunc: () => void;
}) => {
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
            className="w-[400px] p-[10px] bg-lightGray rounded text-[14px]"
            placeholder="Enter notebook name"
          />
        </div>
        <div className="flex pt-[30px]">
          <span className="font-semibold mr-[80px]">Cover</span>
          <div className="grid grid-cols-5 gap-4 ">
            <NoteCoverItem color="red" />
            <NoteCoverItem color="orange" />
            <NoteCoverItem color="yellow" />
            <NoteCoverItem color="green" />
            <NoteCoverItem color="blue" />
            <NoteCoverItem color="indigo" />
            <NoteCoverItem color="purple" />
            <NoteCoverItem color="pink" />
            <NoteCoverItem color="gray" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNoteBookModal;

const NoteCoverItem = ({ color }: { color: NoteCoverColor }) => {
  return (
    <div
      className={`w-[70px] h-[90px] mr-[5px] ${NoteCover[color]} rounded-[10px] cursor-pointer`}
    />
  );
};
