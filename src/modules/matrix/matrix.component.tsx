import React from "react";

import IconAdd from "~/shared/ui/icons/icon-add.svg?react";

import { MatrixColMedian } from "./components/matrix-col-median.component";
import { MatrixHead } from "./components/matrix-head.component";
import { MatrixRow } from "./components/matrix-row.component";
import { useMatrix } from "./matrix.hook";

export const Matrix: React.FC = () => {
  const { matrix, addRow } = useMatrix();

  const handleAddRowButtonClick = () => {
    addRow();
  };

  const rows = matrix.map((row, rowIndex) => (
    <MatrixRow key={rowIndex} rowIndex={rowIndex} row={row} />
  ));

  return (
    <div className="w-full overflow-auto p-8">
      <table className="m-auto">
        <tbody>
          <MatrixHead />
          {rows}
          <MatrixColMedian />
        </tbody>
      </table>
      <div className="flex w-full">
        <button
          className="mx-auto rounded-full text-slate-400 shadow transition-all duration-200 hover:text-slate-500 hover:shadow-md"
          onClick={handleAddRowButtonClick}
        >
          <IconAdd />
        </button>
      </div>
    </div>
  );
};
