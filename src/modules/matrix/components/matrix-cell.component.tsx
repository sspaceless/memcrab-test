import React from "react";

import { cn } from "~/shared/lib/utils";

import { useMatrix } from "../matrix.hook";
import { Cell } from "../types/matrix.type";

const renderCellContent = (
  viewMode: CellViewMode,
  amount: number,
  rowSum: number
) => {
  const percent = rowSum > 0 ? (amount * 100) / rowSum : 0;

  switch (viewMode) {
    case "number":
      return amount;
    case "percent":
      return `${Math.round(percent)}%`;
  }
};

const getCellBackgroundColor = (
  viewMode: CellViewMode,
  cellValue: number,
  maxRowValue: number
): string => {
  if (viewMode === "number") {
    return "white";
  }

  const percentage = maxRowValue > 0 ? (cellValue / maxRowValue) * 100 : 0;
  const intensity = Math.round((percentage / 100) * 255);
  return `rgb(255, ${255 - intensity}, 0)`;
};

export type CellViewMode = "number" | "percent";

type MatrixCellProps = {
  rowIndex: number;
  colIndex: number;
  cell: Cell;
  viewMode: CellViewMode;
  rowSum: number;
  maxRowValue: number;
};

export const MatrixCell: React.FC<MatrixCellProps> = ({
  viewMode,
  rowIndex,
  colIndex,
  rowSum,
  maxRowValue,
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
        "border select-none text-center align-middle hover:!bg-green-300",
        nearestCells.has(cell.id) && "!bg-yellow-300"
      )}
      style={{
        backgroundColor: getCellBackgroundColor(
          viewMode,
          cell.amount,
          maxRowValue
        ),
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCellClick}
    >
      {renderCellContent(viewMode, cell.amount, rowSum)}
    </td>
  );
};
