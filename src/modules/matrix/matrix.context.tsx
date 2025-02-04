import React from "react";

import { Matrix } from "./types/matrix.type";

type MatrixContextProps = {
  matrix: Matrix;
  nearestCells: Set<number>;
  m: number;
  n: number;
  x: number;
  updateMatrix: (matrix: Matrix) => void;
  updateNearestCells: (value: Set<number>) => void;
  updateM: (m: number) => void;
  updateN: (n: number) => void;
  updateX: (x: number) => void;
  increaseCellValue: (
    targetRowIndex: number,
    targetColumnIndex: number
  ) => void;
  findNearestCells: (rowIndex: number, colIndex: number) => void;
};

export const MatrixContext = React.createContext<MatrixContextProps | null>(
  null
);
