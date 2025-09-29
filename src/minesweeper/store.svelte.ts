import {
  toggleFlag,
  revealCells,
  placeMines,
  createEmptyBoard,
} from "./engine";
import type { Board } from "./types";

class Store {
  board: Board = $state(createEmptyBoard());
  initialized: boolean = $state(false);

  restartGame() {
    this.board = createEmptyBoard();
  }

  toggleFlag(row: number, col: number) {
    this.board = toggleFlag($state.snapshot(this.board), row, col);
  }

  revealCells(row: number, col: number) {
    if (!this.initialized) {
      this.board = placeMines($state.snapshot(this.board), row, col);
      this.initialized = true;
    }

    this.board = revealCells($state.snapshot(this.board), row, col);
  }
}

export const store = new Store();
