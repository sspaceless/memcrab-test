import React from "react";

import { cn } from "~/shared/lib/utils";

import { useMatrix } from "../matrix.hook";
import { Cell } from "../types/matrix.type";

export type CellViewMode = "number" | "percent";

type MatrixCellProps = {
  rowIndex: number;
  colIndex: number;
  cell: Cell;
  viewMode: CellViewMode;
  rowSum: number;
};

const renderCellContent = (
  viewMode: CellViewMode,
  amount: number,
  rowSum: number
) => {
  switch (viewMode) {
    case "number":
      return amount;
    case "percent":
      return `${Math.round((amount * 100) / rowSum)}%`;
  }
};

export const MatrixCell: React.FC<MatrixCellProps> = ({
  viewMode,
  rowIndex,
  colIndex,
  rowSum,
  cell,
}) => {
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
      {renderCellContent(viewMode, cell.amount, rowSum)}
    </td>
  );
};
