import { BOARD_SIZE } from "../constants";

export const isOutOfBounds = (row: number, col: number) => {
  return row < 0 || col < 0 || row >= BOARD_SIZE.ROWS || col >= BOARD_SIZE.COLS;
};
