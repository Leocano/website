import { MINE_AMOUNT } from "./constants";
import {
  toggleFlag as toggleFlagEngine,
  revealCells as revealCellsEngine,
  placeMines,
  createEmptyBoard,
  getGameStatus,
  getFlaggedCells,
} from "./engine";
import type { Board } from "./types";

let board: Board = $state(createEmptyBoard());

const flaggedCells = $derived.by(() => getFlaggedCells($state.snapshot(board)));

const gameStatus = $derived.by(() => getGameStatus($state.snapshot(board)));

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
  get gameStatus() {
    return gameStatus;
  },
  restartGame,
  toggleFlag,
  revealCells,
};
