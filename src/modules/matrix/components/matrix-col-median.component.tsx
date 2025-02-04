import React from "react";

import { calculate50thPercentile } from "../lib/utils";
import { useMatrix } from "../matrix.hook";

export const MatrixColMedian: React.FC = () => {
  const { matrix } = useMatrix();

  const percentiles = calculate50thPercentile(matrix);

  return (
    <>
      <tr className="border">
        <td className="border px-2">50th Percentile</td>
        {percentiles.map((value, index) => (
          <td key={index} className="border px-2 text-center align-middle">
            {value.toFixed(1)}
          </td>
        ))}
      </tr>
    </>
  );
};
