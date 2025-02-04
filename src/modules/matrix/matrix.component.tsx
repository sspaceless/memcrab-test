import React from "react";

import { MatrixColMedian } from "./components/matrix-col-median.component";
import { MatrixHead } from "./components/matrix-head.component";
import { MatrixRow } from "./components/matrix-row.component";
import { useMatrix } from "./matrix.hook";

export const Matrix: React.FC = () => {
  const { matrix, addRow } = useMatrix();

  const handleAddRowButtonClick = () => {
    addRow();
  };

  const rows = matrix.map((row, rowIndex) => (
    <MatrixRow key={rowIndex} rowIndex={rowIndex} row={row} />
  ));

  return (
    <div>
      <table className="border">
        <tbody>
          <MatrixHead />
          {rows}
          <MatrixColMedian />
          <button onClick={handleAddRowButtonClick}>+</button>
        </tbody>
      </table>
    </div>
  );
};
