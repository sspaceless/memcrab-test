import React from "react";

import { Matrix } from "~/modules/matrix/matrix.component";
import { useMatrix } from "~/modules/matrix/matrix.hook";

const App: React.FC = () => {
  const { matrix, x, updateM, updateN, updateX } = useMatrix();

  const m = matrix?.length ?? 0;
  const n = matrix[0]?.length ?? 0;

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    min: number,
    max: number,
    updateValue: (value: number) => void
  ) => {
    const value = +event.target.value;

    if (value < min) {
      updateValue(min);
      return;
    }

    if (value > max) {
      updateValue(max);
      return;
    }

    updateValue(value);
  };

  return (
    <div className="flex justify-center items-center h-screen flex-col gap-4">
      <div className="flex gap-4">
        <label>
          M
          <input
            id="m"
            type="number"
            className="border rounded-lg px-1 text-center ml-1"
            value={m}
            onChange={(event) => handleInputChange(event, 0, 100, updateM)}
          />
        </label>
        <label>
          N
          <input
            id="n"
            type="number"
            className="border rounded-lg px-1 text-center ml-1"
            value={n}
            onChange={(event) => handleInputChange(event, 0, 100, updateN)}
          />
        </label>

        <label>
          X
          <input
            id="x"
            type="number"
            className="border rounded-lg px-1 text-center ml-1"
            value={x}
            onChange={(event) => handleInputChange(event, 0, m * n, updateX)}
          />
        </label>
      </div>
      <Matrix />
    </div>
  );
};

export default App;
