import type { Board } from "../types";
import { BOARD_SIZE, DIRECTIONS, MINE_AMOUNT } from "../constants";
import { isOutOfBounds } from "../board/utils";

export function placeMines(
  board: Board,
  safeRow: number,
  safeCol: number,
): Board {
  let placed = 0;
  while (placed < MINE_AMOUNT) {
    const row = Math.floor(Math.random() * BOARD_SIZE.ROWS);
    const col = Math.floor(Math.random() * BOARD_SIZE.COLS);

    if (row === safeRow && col === safeCol) {
      continue;
    }

    const cell = board[row][col];

    if (cell.content === "mine") {
      continue;
    }

    cell.content = "mine";
    placed++;

    for (const [rowOffset, colOffset] of DIRECTIONS) {
      const newRow = row + rowOffset;
      const newCol = col + colOffset;
      if (!isOutOfBounds(newRow, newCol)) {
        board[newRow][newCol].bombsAround++;
      }
    }
  }

  return board;
}
