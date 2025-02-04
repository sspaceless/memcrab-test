import React from "react";

import { useMatrix } from "../matrix.hook";
import { Cell } from "../types/matrix.type";
import { CellViewMode, MatrixCell } from "./matrix-cell.component";

type MatrixRowProps = { rowIndex: number; row: Cell[] };

export const MatrixRow: React.FC<MatrixRowProps> = ({ rowIndex, row }) => {
  const [cellViewMode, setCellViewMode] =
    React.useState<CellViewMode>("number");

  const { removeRow } = useMatrix();

  const handleSumCellMouseEnter = () => {
    setCellViewMode("percent");
  };

  const handleSumCellMouseLeave = () => {
    setCellViewMode("number");
  };

  const handleRemoveRowButtonClick = () => {
    removeRow(rowIndex);
  };

  const rowSum = row.reduce((sum, currentRow) => sum + currentRow.amount, 0);
  const maxRowValue = Math.max(...row.map((cell) => cell.amount));

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
          maxRowValue={maxRowValue}
        />
      ))}
      <td
        className="border select-none  text-center align-middle"
        onMouseEnter={handleSumCellMouseEnter}
        onMouseLeave={handleSumCellMouseLeave}
      >
        {rowSum}
      </td>

      <button onClick={handleRemoveRowButtonClick}>X</button>
    </tr>
  );
};
