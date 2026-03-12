export type Cell = {
  content: "empty" | "mine";
  status: "initial" | "clicked" | "flagged";
  minesAround: number;
};

export type Board = Cell[][];
