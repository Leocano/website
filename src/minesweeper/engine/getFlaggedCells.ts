import type { Board } from "../types";

export const getFlaggedCells = (board: Board) => {
  return board.flat().filter((cell) => cell.status === "flagged").length;
};
