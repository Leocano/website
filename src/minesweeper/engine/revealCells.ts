import type { Board } from "../types";
import { DIRECTIONS } from "../constants";
import { isOutOfBounds } from "./isOutOfBounds";

export function revealCells(board: Board, row: number, col: number): Board {
  if (isOutOfBounds(row, col)) {
    return board;
  }

  const cell = board[row][col];

  if (cell.status === "clicked" || cell.status === "flagged") {
    return board;
  }

  board[row][col] = { ...cell, status: "clicked" };

  if (cell.content === "mine" || cell.bombsAround > 0) {
    return board;
  }

  for (const [rowOffset, colOffset] of DIRECTIONS) {
    board = revealCells(board, row + rowOffset, col + colOffset);
  }

  return board;
}
