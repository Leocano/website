import type { Board } from "../types";

export function toggleFlag(board: Board, row: number, col: number): Board {
  const cell = board[row][col];

  if (cell.status === "initial") {
    board[row][col] = { ...cell, status: "flagged" };
  } else if (cell.status === "flagged") {
    board[row][col] = { ...cell, status: "initial" };
  }

  return board;
}
