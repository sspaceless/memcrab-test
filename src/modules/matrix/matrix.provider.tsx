import React from "react";
import { MatrixContext } from "./matrix.context";
import { Matrix } from "./types/matrix.type";

export const MatrixProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [matrix, setMatrix] = React.useState<Matrix>([]);

  return (
    <MatrixContext.Provider
      value={{
        matrix,
        setMatrix,
      }}
    >
      {children}
    </MatrixContext.Provider>
  );
};
