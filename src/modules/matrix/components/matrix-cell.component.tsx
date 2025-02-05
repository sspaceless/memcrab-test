import React from "react";

import { cn } from "~/shared/lib/utils";

import { useMatrix } from "../matrix.hook";
import { Cell } from "../types/matrix.type";

const renderCellContent = (
  viewMode: CellViewMode,
  amount: number,
  rowSum: number,
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
  maxRowValue: number,
) => {
  if (viewMode === "number") {
    return "#ffffff";
  }

  const percentage = maxRowValue > 0 ? cellValue / maxRowValue : 0;

  const r = Math.round(254 - percentage * (254 - 253));
  const g = Math.round(249 - percentage * (249 - 199));
  const b = Math.round(194 - percentage * (194 - 0));

  return `rgb(${r}, ${g}, ${b})`;
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
  const [isShaking, setIsShaking] = React.useState(false);

  const {
    nearestCells,
    increaseCellValue,
    findNearestCells,
    updateNearestCells,
  } = useMatrix();

  const handleCellClick = () => {
    increaseCellValue(rowIndex, colIndex);
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 300);
  };

  const handleMouseEnter = () => {
    findNearestCells(rowIndex, colIndex);
  };

  const handleMouseLeave = () => {
    updateNearestCells(new Set());
  };

  return (
    <td
      className={cn("group min-w-[50px] p-1 select-none")}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCellClick}
    >
      <div
        className={cn(
          "ease flex aspect-square cursor-pointer items-center justify-center rounded border border-slate-200 transition-all duration-200",
          "group-hover:-translate-y-2 group-hover:scale-110 group-hover:hover:!bg-slate-200",
          nearestCells.has(cell.id) && "-translate-y-2 scale-110 !bg-green-200",
          isShaking && "animate-shake",
          viewMode === "percent" && "bg-yellow- duration-300",
        )}
        style={{
          backgroundColor: getCellBackgroundColor(
            viewMode,
            cell.amount,
            maxRowValue,
          ),
        }}
      >
        {renderCellContent(viewMode, cell.amount, rowSum)}
      </div>
    </td>
  );
};
