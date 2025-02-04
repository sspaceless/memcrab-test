import React from "react";
import { Matrix } from "../modules/matrix/matrix.component";
import { MatrixProvider } from "../modules/matrix/matrix.provider";

export const App: React.FC = () => {
  const [m, setM] = React.useState(2);
  const [n, setN] = React.useState(2);

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
            onChange={(event) => setM(+event.target.value)}
            min={0}
            max={100}
          />
        </label>
        <label>
          N
          <input
            id="n"
            type="number"
            className="border rounded-lg px-1 text-center ml-1"
            value={n}
            onChange={(event) => setN(+event.target.value)}
            min={0}
            max={100}
          />
        </label>
      </div>
      <MatrixProvider>
        <Matrix m={m} n={n} />
      </MatrixProvider>
    </div>
  );
};

export default App;
