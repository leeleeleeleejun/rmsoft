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

export interface NoteBook {
  name: string;
  cover: NoteCoverColor;
  date: string;
}
