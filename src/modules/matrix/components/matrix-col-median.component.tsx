import React from "react";

import { calculate50thPercentile } from "../lib/utils";
import { useMatrix } from "../matrix.hook";

export const MatrixColMedian: React.FC = () => {
  const { matrix } = useMatrix();

  const percentiles = calculate50thPercentile(matrix);

  return (
    <>
      <tr className="border-t border-slate-400">
        <td className="border-r border-slate-400 px-2 text-end text-sm">
          50th <br />
          Percentile
        </td>
        {percentiles.map((value, index) => (
          <td key={index}>
            <div className="flex aspect-square items-center justify-center text-sm">
              {value.toFixed(1)}
            </div>
          </td>
        ))}
        <td className="border-l border-slate-400" />
        <td className="border-t border-white" />
      </tr>
    </>
  );
};
