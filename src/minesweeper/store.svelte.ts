import { MINE_AMOUNT } from "./constants";
import {
  toggleFlag as toggleFlagEngine,
  revealCells as revealCellsEngine,
  placeMines,
  createEmptyBoard,
} from "./engine";
import type { Board } from "./types";

let board: Board = $state(createEmptyBoard());

const flaggedMines: number = $derived(
  board
    .flat()
    .filter((cell) => cell.status === "flagged" && cell.content === "mine")
    .length,
);

const flaggedCells: number = $derived(
  board.flat().filter((cell) => cell.status === "flagged").length,
);

const gameStatus: "initial" | "playing" | "win" | "loss" = $derived.by(() => {
  if (
    board
      .flat()
      .some((cell) => cell.status === "clicked" && cell.content === "mine")
  ) {
    return "loss";
  }

  if (flaggedMines === MINE_AMOUNT && flaggedCells === MINE_AMOUNT) {
    return "win";
  }

  if (board.flat().some((cell) => cell.status === "clicked")) {
    return "playing";
  }

  return "initial";
});

const restartGame = () => {
  board = createEmptyBoard();
};

const toggleFlag = (row: number, col: number) => {
  board = toggleFlagEngine($state.snapshot(board), row, col);
};

const revealCells = (row: number, col: number) => {
  if (gameStatus === "initial") {
    board = placeMines($state.snapshot(board), row, col);
  }

  board = revealCellsEngine($state.snapshot(board), row, col);
};

export const store = {
  get board() {
    return board;
  },
  get flaggedCells() {
    return flaggedCells;
  },
  get flaggedMines() {
    return flaggedMines;
  },
  get gameStatus() {
    return gameStatus;
  },
  restartGame,
  toggleFlag,
  revealCells,
};
