import React from "react";

import { cn } from "~/shared/lib/utils";
import IconDeleteLeft from "~/shared/ui/icons/icon-delete-left.svg?react";

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
    <tr>
      <td className="border-r border-slate-400 px-2 text-end text-sm">
        M = {rowIndex + 1}
      </td>
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
        className="group border-l border-slate-400 p-1 select-none"
        onMouseEnter={handleSumCellMouseEnter}
        onMouseLeave={handleSumCellMouseLeave}
      >
        <div
          className={cn(
            "ease flex aspect-square items-center justify-center rounded transition-all duration-200",
            "group-hover:shadow group-hover:hover:!bg-slate-200",
          )}
        >
          {rowSum}
        </div>
      </td>
      <td>
        <div className="flex h-full items-center justify-center">
          <button
            className="my-auto cursor-pointer text-slate-200 transition-all duration-200 hover:text-slate-400"
            onClick={handleRemoveRowButtonClick}
          >
            <IconDeleteLeft />
          </button>
        </div>
      </td>
    </tr>
  );
};
