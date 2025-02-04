import React from "react";

import { generateMatrix, getNearestCellsSet } from "./lib/utils";
import { MatrixContext } from "./matrix.context";
import { Matrix } from "./types/matrix.type";

export const MatrixProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [m, setM] = React.useState(2);
  const [n, setN] = React.useState(2);
  const [x, setX] = React.useState(0);
  const [matrix, setMatrix] = React.useState<Matrix>([]);
  const [nearestCells, setNearestCells] = React.useState<Set<number>>(
    new Set()
  );

  React.useEffect(() => {
    const initialMatrix = generateMatrix(m, n);
    updateMatrix(initialMatrix);
  }, [m, n]);

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
  };

  const updateN = (value: number) => {
    setN(value);
  };

  const updateX = (value: number) => {
    setX(value);
  };

  const increaseCellValue = (
    targetRowIndex: number,
    targetColumnIndex: number
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
      }}
    >
      {children}
    </MatrixContext.Provider>
  );
};
