import React from "react";

import { cn } from "~/shared/lib/utils";

import { useMatrix } from "../matrix.hook";
import { Cell } from "../types/matrix.type";

export const MatrixCell: React.FC<{
  rowIndex: number;
  colIndex: number;
  cell: Cell;
}> = ({ rowIndex, colIndex, cell }) => {
  const {
    nearestCells,
    increaseCellValue,
    findNearestCells,
    updateNearestCells,
  } = useMatrix();

  const handleCellClick = () => {
    increaseCellValue(rowIndex, colIndex);
  };

  const handleMouseEnter = () => {
    findNearestCells(rowIndex, colIndex);
  };

  const handleMouseLeave = () => {
    updateNearestCells(new Set());
  };

  return (
    <td
      className={cn(
        "border select-none text-center align-middle hover:bg-green-300",
        nearestCells.has(cell.id) && "bg-yellow-300"
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCellClick}
    >
      {cell.amount}
    </td>
  );
};
