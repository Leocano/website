import {
  toggleFlag as toggleFlagEngine,
  revealCells as revealCellsEngine,
  placeMines,
  createEmptyBoard,
} from "./engine";
import type { Board } from "./types";

class Store {
  board: Board = $state(createEmptyBoard());
  initialized: boolean = $state(false);

  restartGame() {
    store.board = createEmptyBoard();
  }

  toggleFlag(row: number, col: number) {
    store.board = toggleFlagEngine($state.snapshot(store.board), row, col);
  }

  revealCells(row: number, col: number) {
    if (!store.initialized) {
      store.board = placeMines($state.snapshot(store.board), row, col);
      store.initialized = true;
    }

    store.board = revealCellsEngine($state.snapshot(store.board), row, col);
  }
}

export const store = new Store();
