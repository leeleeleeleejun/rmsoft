import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { EditorProps } from "@/types";
import MyOnChangePlugin from "./MyOnChangePlugin";
import MyCustomPlugin from "./MyCustomPlugin";

const Editor = ({
  onChangeFunc,
  currentNoteBook,
  currentNoteNumber,
  location,
}: EditorProps) => {
  const initialConfig = {
    namespace: "MyEditor",
    onError: (error: Error) => {
      console.error(error);
    },
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <RichTextPlugin
        contentEditable={
          <ContentEditable
            className="flex flex-col gap-[5px] h-dvh p-[20px] outline-none [&>*:first-child]:font-semibold 
          [&>*:first-child]:text-[24px] [&>*:first-child]:mb-[5px] "
          />
        }
        placeholder={
          <div className="absolute top-0 left-[5px] p-[22px] text-gray2 ">
            Type / for menu or Select From Templates
          </div>
        }
        ErrorBoundary={LexicalErrorBoundary}
      />
      <HistoryPlugin />
      <MyOnChangePlugin
        onChange={(editorState) => {
          const editorStateJSON = editorState.toJSON();
          onChangeFunc(JSON.stringify(editorStateJSON));
        }}
      />
      <MyCustomPlugin
        NoteBook={currentNoteBook}
        currentNoteNumber={currentNoteNumber}
        location={location}
      />
    </LexicalComposer>
  );
};

export default Editor;
