import {
  toggleFlag as toggleFlagEngine,
  revealCells as revealCellsEngine,
  placeMines,
  createEmptyBoard,
} from "../engine";

export const store = $state({
  board: createEmptyBoard(),
  initialized: false,
});

export function restartGame() {
  store.board = createEmptyBoard();
}

export function toggleFlag(row: number, col: number) {
  store.board = toggleFlagEngine($state.snapshot(store.board), row, col);
}

export function revealCells(row: number, col: number) {
  if (!store.initialized) {
    store.board = placeMines($state.snapshot(store.board), row, col);
    store.initialized = true;
  }

  store.board = revealCellsEngine($state.snapshot(store.board), row, col);
}
