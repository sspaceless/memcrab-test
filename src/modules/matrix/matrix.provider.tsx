import React from "react";

import {
  generateMatrix,
  generateRandomCellValue,
  generateUniqueId,
  getNearestCellsSet,
} from "./lib/utils";
import { MatrixContext } from "./matrix.context";
import { Cell, Matrix } from "./types/matrix.type";

export const MatrixProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [m, setM] = React.useState(2);
  const [n, setN] = React.useState(2);
  const [x, setX] = React.useState(0);
  const [matrix, setMatrix] = React.useState<Matrix>([]);
  const [nearestCells, setNearestCells] = React.useState<Set<number>>(
    new Set(),
  );

  const regenerateMatrix = (m: number, n: number) => {
    const initialMatrix = generateMatrix(m, n);
    updateMatrix(initialMatrix);
  };

  React.useEffect(() => {
    regenerateMatrix(m, n);
  }, []);

  React.useEffect(() => {
    if (x > m * n) {
      updateX(m * n);
    }
  }, [m, n, x]);

  const updateMatrix = (value: Matrix) => {
    setMatrix(value);
  };

  const updateNearestCells = (value: Set<number>) => {
    setNearestCells(value);
  };

  const updateM = (value: number) => {
    setM(value);
    regenerateMatrix(value, n);
  };

  const updateN = (value: number) => {
    setN(value);
    regenerateMatrix(m, value);
  };

  const updateX = (value: number) => {
    setX(value);
  };

  const increaseCellValue = (
    targetRowIndex: number,
    targetColumnIndex: number,
  ) => {
    setMatrix((previousMatrix) => {
      return previousMatrix.map((row, currentRowIndex) => {
        if (currentRowIndex !== targetRowIndex) {
          return row;
        }

        return row.map((cell, currentColumnIndex) => {
          if (currentColumnIndex !== targetColumnIndex) {
            return cell;
          }

          return { ...cell, amount: cell.amount + 1 };
        });
      });
    });
  };

  const findNearestCells = (rowIndex: number, columnIndex: number) => {
    const targetValue = matrix[rowIndex][columnIndex].amount;
    setNearestCells(getNearestCellsSet(matrix, targetValue, x));
  };

  const removeRow = (rowIndex: number) => {
    setMatrix((prevMatrix) => {
      const updatedMatrix = prevMatrix.filter((_, index) => index !== rowIndex);
      return updatedMatrix;
    });

    setM((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const addRow = () => {
    const newRow: Cell[] = Array.from(
      { length: matrix[0]?.length },
      (_, colIndex) => ({
        id: generateUniqueId(matrix?.length, colIndex),
        amount: generateRandomCellValue(),
      }),
    );

    setMatrix((prevMatrix) => {
      const updatedMatrix = [...prevMatrix, newRow];
      return updatedMatrix;
    });

    setM((prev) => prev + 1);
  };

  return (
    <MatrixContext.Provider
      value={{
        m,
        n,
        x,
        matrix,
        nearestCells,
        updateM,
        updateN,
        updateX,
        updateMatrix,
        updateNearestCells,
        increaseCellValue,
        findNearestCells,
        removeRow,
        addRow,
      }}
    >
      {children}
    </MatrixContext.Provider>
  );
};
