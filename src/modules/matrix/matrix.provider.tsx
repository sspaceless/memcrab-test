import React from "react";
import { MatrixContext } from "./matrix.context";
import { Matrix } from "./types/matrix.type";

export const MatrixProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [matrix, setMatrix] = React.useState<Matrix>([]);

  const updateMatrix = (value: Matrix) => {
    setMatrix(value);
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

  return (
    <MatrixContext.Provider
      value={{
        matrix,
        updateMatrix,
        increaseCellValue,
      }}
    >
      {children}
    </MatrixContext.Provider>
  );
};
