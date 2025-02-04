import React from "react";
import { MatrixRow } from "./components/matrix-row.component";
import { useMatrix } from "./matrix.hook";
import { generateMatrix } from "./lib/utils";
import { MatrixColMedian } from "./components/matrix-col-median.component";
import { MatrixHead } from "./components/matrix-head.component";

type MatrixProps = {
  m: number;
  n: number;
};

export const Matrix: React.FC<MatrixProps> = ({ m, n }) => {
  const { matrix, updateMatrix } = useMatrix();

  React.useEffect(() => {
    const initialMatrix = generateMatrix(m, n);
    updateMatrix(initialMatrix);
  }, [m, n]);

  const rows = matrix.map((row, rowIndex) => (
    <MatrixRow key={rowIndex} rowIndex={rowIndex} row={row} />
  ));

  return (
    <div>
      <table className="border">
        <tbody>
          <MatrixHead n={n} />
          {rows}
          <MatrixColMedian />
        </tbody>
      </table>
    </div>
  );
};
