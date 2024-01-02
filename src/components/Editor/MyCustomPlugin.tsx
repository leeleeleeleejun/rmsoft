import { useEffect } from "react";
import { MyCustomPluginProps } from "@/types";
import { NoteBasicContent } from "@/constants";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

const MyCustomPlugin = ({
  NoteBook,
  currentNoteNumber,
  location,
}: MyCustomPluginProps) => {
  const [editor] = useLexicalComposerContext();
  useEffect(() => {
    if (NoteBook.length > currentNoteNumber) {
      const editorState = editor.parseEditorState(
        NoteBook[currentNoteNumber]?.content || NoteBasicContent
      );
      editor.setEditorState(editorState);
    }
  }, [currentNoteNumber, location]);

  return null;
};

export default MyCustomPlugin;
