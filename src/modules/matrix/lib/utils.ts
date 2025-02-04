import { Cell, Matrix } from "../types/matrix.type";

export const generateUniqueId = () => {
  return Date.now() + Math.floor(Math.random() * 1000);
};

export const generateRandomCellValue = () => {
  return Math.floor(Math.random() * 9) + 1;
  // amount: Math.floor(Math.random() * 900) + 100,
};

export const generateMatrix = (m: number, n: number): Cell[][] => {
  return Array.from({ length: m }, () =>
    Array.from({ length: n }, () => ({
      id: generateUniqueId(),
      amount: generateRandomCellValue(),
    }))
  );
};

export const calculate50thPercentile = (matrix: Cell[][]): number[] => {
  if (matrix.length === 0) {
    return [];
  }

  const columns = matrix[0].length;
  const percentiles: number[] = [];

  for (let col = 0; col < columns; col++) {
    const columnValues = matrix
      .map((row) => row[col].amount)
      .sort((a, b) => a - b);

    const mid = Math.floor(columnValues.length / 2);

    const median =
      columnValues.length % 2 === 0
        ? (columnValues[mid - 1] + columnValues[mid]) / 2
        : columnValues[mid];

    percentiles.push(median);
  }

  return percentiles;
};

export const getNearestCellsSet = (
  matrix: Matrix,
  targetValue: number,
  x: number
) => {
  const allCells = matrix.flatMap((row, rowIndex) =>
    row.map((cell, columnIndex) => ({
      id: cell.id,
      amount: cell.amount,
      rowIndex,
      columnIndex,
      difference: Math.abs(cell.amount - targetValue),
    }))
  );

  const nearestCells = allCells
    .sort((a, b) => a.difference - b.difference)
    .slice(0, x);

  return new Set(nearestCells.map((cell) => cell.id));
};
