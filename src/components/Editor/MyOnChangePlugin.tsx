import { useEffect } from "react";
import { EditorState } from "lexical";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

const MyOnChangePlugin = ({
  onChange,
}: {
  onChange: (editorState: EditorState) => void;
}) => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      onChange(editorState);
    });
  }, [editor, onChange]);

  editor.parseEditorState;

  return null;
};

export default MyOnChangePlugin;
