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
    const rowToPlace = Math.floor(Math.random() * BOARD_SIZE.ROWS);
    const colToPlace = Math.floor(Math.random() * BOARD_SIZE.COLS);

    if (
      (rowToPlace === safeRow + 1 ||
        rowToPlace === safeRow - 1 ||
        rowToPlace === safeRow) &&
      (colToPlace === safeCol + 1 ||
        colToPlace === safeCol - 1 ||
        colToPlace === safeCol)
    ) {
      continue;
    }

    const cell = board[rowToPlace][colToPlace];

    if (cell.content === "mine") {
      continue;
    }

    cell.content = "mine";
    placed++;

    for (const [rowOffset, colOffset] of DIRECTIONS) {
      const newRow = rowToPlace + rowOffset;
      const newCol = colToPlace + colOffset;
      if (!isOutOfBounds(newRow, newCol)) {
        board[newRow][newCol].bombsAround++;
      }
    }
  }

  return board;
}
