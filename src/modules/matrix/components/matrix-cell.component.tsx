import React from "react";
import { Cell } from "../types/matrix.type";
import { useMatrix } from "../matrix.hook";

export const MatrixCell: React.FC<{
  rowIndex: number;
  colIndex: number;
  cell: Cell;
}> = ({ rowIndex, colIndex, cell }) => {
  const { increaseCellValue } = useMatrix();

  const handleCellClick = () => {
    increaseCellValue(rowIndex, colIndex);
  };

  return (
    <td
      className="border select-none  text-center align-middle"
      onClick={handleCellClick}
    >
      {cell.amount}
    </td>
  );
};
