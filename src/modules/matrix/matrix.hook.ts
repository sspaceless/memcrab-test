import React from "react";
import { MatrixContext } from "./matrix.context";

export const useMatrix = () => {
  const context = React.useContext(MatrixContext);

  if (!context) {
    throw Error("must be used within a provider");
  }

  return context;
};
