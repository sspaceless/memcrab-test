import React from "react";
import { Matrix } from "./types/matrix.type";

type MatrixContextProps = {
  matrix: Matrix;
  updateMatrix: (matrix: Matrix) => void;
  increaseCellValue: (
    targetRowIndex: number,
    targetColumnIndex: number
  ) => void;
};

export const MatrixContext = React.createContext<MatrixContextProps | null>(
  null
);
