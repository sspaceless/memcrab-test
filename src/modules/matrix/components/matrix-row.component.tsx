import React from "react";

import { Cell } from "../types/matrix.type";
import { MatrixCell } from "./matrix-cell.component";

export const MatrixRow: React.FC<{ rowIndex: number; row: Cell[] }> = ({
  rowIndex,
  row,
}) => {
  const rowSum = row.reduce((sum, currentRow) => sum + currentRow.amount, 0);

  return (
    <tr className="border">
      <td className="px-2"> M = {rowIndex + 1}</td>
      {row.map((cell, colIndex) => (
        <MatrixCell
          key={cell.id}
          rowIndex={rowIndex}
          colIndex={colIndex}
          cell={cell}
        />
      ))}
      <td className="border select-none  text-center align-middle">{rowSum}</td>
    </tr>
  );
};
