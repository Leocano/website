import { MINE_AMOUNT } from "../constants";
import type { Board } from "../types";
import { getFlaggedCells } from "./getFlaggedCells";

export const getGameStatus = (
  board: Board,
): "initial" | "playing" | "win" | "loss" => {
  if (
    board
      .flat()
      .some((cell) => cell.status === "clicked" && cell.content === "mine")
  ) {
    return "loss";
  }

  const flaggedMines: number = board
    .flat()
    .filter(
      (cell) => cell.status === "flagged" && cell.content === "mine",
    ).length;

  const flaggedCells = getFlaggedCells(board);

  if (flaggedMines === MINE_AMOUNT && flaggedCells === MINE_AMOUNT) {
    return "win";
  }

  if (board.flat().some((cell) => cell.status === "clicked")) {
    return "playing";
  }

  return "initial";
};
