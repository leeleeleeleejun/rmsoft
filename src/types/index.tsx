export type NoteCoverColor =
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "purple"
  | "pink"
  | "gray";

export interface NoteBookType {
  name: string;
  cover: NoteCoverColor;
  date: string;
}

export interface NoteBookProps {
  children: string;
  item: NoteBookType;
  openNoteBookModalFunc: () => void;
  index: number;
  showMenu: number | null;
  setShowMenu: React.Dispatch<React.SetStateAction<number | null>>;
}

export interface NoteCoverItemProps {
  cover: NoteCoverColor;
  chooseCover: string | undefined;
  setNoteBookFunc: (key: "name" | "cover", value: string) => void;
}

export interface SideBarItemMenuProps {
  showMenu: boolean;
  deleteNoteBook: () => void;
  setEditNumberFunc: () => void;
  setShowMenu: React.Dispatch<React.SetStateAction<number | null>>;
}

export interface Note {
  content: string;
  date: Date;
}

export interface EditorProps {
  onChangeFunc: (value: string) => void;
  currentNoteBook: Note[];
  currentNoteNumber: number;
  location: string;
}

export interface MyCustomPluginProps {
  NoteBook: Note[];
  currentNoteNumber: number;
  location: string;
}
