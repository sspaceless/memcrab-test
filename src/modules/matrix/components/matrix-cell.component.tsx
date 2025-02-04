import React from "react";
import { Cell } from "../types/matrix.type";

export const MatrixCell: React.FC<{
  rowIndex: number;
  colIndex: number;
  cell: Cell;
}> = ({ cell }) => {
  return (
    <td className="border select-none  text-center align-middle">
      {cell.amount}
    </td>
  );
};
