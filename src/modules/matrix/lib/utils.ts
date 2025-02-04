import { Cell } from "../types/matrix.type";

export const generateMatrix = (m: number, n: number): Cell[][] => {
  return Array.from({ length: m }, (_, rowIndex) =>
    Array.from({ length: n }, (_, colIndex) => ({
      id: rowIndex * n + colIndex,
      amount: Math.floor(Math.random() * 9) + 1,

      // amount: Math.floor(Math.random() * 900) + 100,
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
