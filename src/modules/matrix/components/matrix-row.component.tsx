import React from "react";

import { Cell } from "../types/matrix.type";
import { CellViewMode, MatrixCell } from "./matrix-cell.component";

type MatrixRowProps = { rowIndex: number; row: Cell[] };

export const MatrixRow: React.FC<MatrixRowProps> = ({ rowIndex, row }) => {
  const [cellViewMode, setCellViewMode] =
    React.useState<CellViewMode>("number");

  const rowSum = row.reduce((sum, currentRow) => sum + currentRow.amount, 0);

  const handleSumCellMouseEnter = () => {
    setCellViewMode("percent");
  };

  const handleSumCellMouseLeave = () => {
    setCellViewMode("number");
  };

  return (
    <tr className="border">
      <td className="px-2"> M = {rowIndex + 1}</td>
      {row.map((cell, colIndex) => (
        <MatrixCell
          key={cell.id}
          rowIndex={rowIndex}
          colIndex={colIndex}
          cell={cell}
          viewMode={cellViewMode}
          rowSum={rowSum}
        />
      ))}
      <td
        className="border select-none  text-center align-middle"
        onMouseEnter={handleSumCellMouseEnter}
        onMouseLeave={handleSumCellMouseLeave}
      >
        {rowSum}
      </td>
    </tr>
  );
};
