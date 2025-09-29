import { MINE_AMOUNT } from "./constants";
import {
  toggleFlag,
  revealCells,
  placeMines,
  createEmptyBoard,
} from "./engine";
import type { Board } from "./types";

class Store {
  board: Board = $state(createEmptyBoard());

  status: "uninitialized" | "playing" | "win" = $derived.by(() => {
    if (this.flaggedMines === MINE_AMOUNT) {
      return "win";
    }

    if (this.board.flat().some((cell) => cell.status === "clicked")) {
      return "playing";
    }

    return "uninitialized";
  });

  flaggedMines: number = $derived(
    this.board
      .flat()
      .filter((cell) => cell.status === "flagged" && cell.content === "mine")
      .length,
  );

  restartGame() {
    this.board = createEmptyBoard();
  }

  toggleFlag(row: number, col: number) {
    this.board = toggleFlag($state.snapshot(this.board), row, col);
  }

  revealCells(row: number, col: number) {
    if (this.status === "uninitialized") {
      this.board = placeMines($state.snapshot(this.board), row, col);
    }

    this.board = revealCells($state.snapshot(this.board), row, col);
  }
}

export const store = new Store();
