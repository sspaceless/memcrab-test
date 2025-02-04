import React from "react";
import { Matrix } from "./types/matrix.type";

type MatrixContextProps = {
  matrix: Matrix;
  setMatrix: React.Dispatch<React.SetStateAction<Matrix>>;
};

export const MatrixContext = React.createContext<MatrixContextProps | null>(
  null
);
