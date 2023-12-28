import { EditorState } from "lexical";
import { useEffect, useState } from "react";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
//import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";

import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
//import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";

const NoteBookPage = () => {
  return (
    <div className="flex">
      <div className="border-solid border-r border-gray h-dvh">
        <div className="p-[12px] bg-lightGray2 border-b border-solid border-gray">
          aaaaa
        </div>
        <ul>
          <MemoItem />
          <MemoItem />
          <MemoItem />
          <MemoItem />
        </ul>
      </div>
      <div className="relative w-[400px] flex-auto">
        <Editor />
      </div>
    </div>
  );
};

export default NoteBookPage;

const MemoItem = () => {
  return (
    <li className="w-[300px] flex gap-[20px] flex-col box-content py-[20px] mx-[20px] text-[14px] border-b border-solid border-gray">
      <div className="font-semibold">New Note</div>
      <div className="text-ellipsis whitespace-nowrap overflow-hidden">
        가나다라마바사아자차카타파하가나다라마바사아자차카타파하
      </div>
      <div className="text-[gray] text-[11px] font-thin">Today, 2:21 PM</div>
    </li>
  );
};

function MyCustomAutoFocusPlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    // Focus the editor when the effect fires!
    editor.focus();
  }, [editor]);

  return null;
}

function MyOnChangePlugin({
  onChange,
}: {
  onChange: (editorState: EditorState) => void;
}) {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      onChange(editorState);
    });
  }, [editor, onChange]);

  return null;
}

function Editor() {
  const [editorState, setEditorState] = useState<string>();
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
            className="flex flex-col gap-[5px] w-[100%] h-dvh p-[20px] outline-none [&>*:first-child]:font-semibold 
          [&>*:first-child]:text-[24px]  [&>*:first-child]:mb-[5px] "
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
      <MyCustomAutoFocusPlugin />
      <MyOnChangePlugin
        onChange={(editorState) => {
          const editorStateJSON = editorState.toJSON();
          setEditorState(JSON.stringify(editorStateJSON));
        }}
      />
    </LexicalComposer>
  );
}
