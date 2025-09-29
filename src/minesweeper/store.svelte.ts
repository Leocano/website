import {
  toggleFlag,
  revealCells,
  placeMines,
  createEmptyBoard,
} from "./engine";
import type { Board } from "./types";

class Store {
  board: Board = $state(createEmptyBoard());
  status: "uninitialized" | "playing" | "win" | "loss" =
    $state("uninitialized");

  restartGame() {
    this.status = "uninitialized";
    this.board = createEmptyBoard();
  }

  toggleFlag(row: number, col: number) {
    this.board = toggleFlag($state.snapshot(this.board), row, col);
  }

  revealCells(row: number, col: number) {
    if (this.status === "uninitialized") {
      this.board = placeMines($state.snapshot(this.board), row, col);
      this.status = "playing";
    }

    this.board = revealCells($state.snapshot(this.board), row, col);
  }

  lose() {
    alert("You lose!");
    this.restartGame();
  }
}

export const store = new Store();
