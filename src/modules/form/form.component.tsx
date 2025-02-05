import IconChevronLeft from "~/shared/ui/icons/icon-chevron-left.svg?react";
import { TextField } from "~/shared/ui/text-field.component";

import { useMatrix } from "../matrix/matrix.hook";

const handleInputChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  min: number,
  max: number,
  updateValue: (value: number) => void,
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

export const Form: React.FC = () => {
  const { matrix, x, updateM, updateN, updateX } = useMatrix();

  const m = matrix?.length ?? 0;
  const n = matrix[0]?.length ?? 0;

  return (
    <div className="group absolute top-4 right-0 flex translate-x-[85%] flex-row gap-4 rounded-l-lg border border-slate-400 bg-white p-6 pl-2 shadow-md transition-all duration-300 hover:translate-x-0">
      <div className="my-auto rotate-180 text-slate-400 transition-all duration-400 group-hover:rotate-0">
        <IconChevronLeft />
      </div>
      <div className="flex flex-col gap-4">
        <TextField
          label="M"
          id="m"
          type="number"
          value={m}
          onChange={(event) => handleInputChange(event, 0, 100, updateM)}
          helperText={`Min: ${0} Max: ${100}`}
        />

        <TextField
          label="N"
          id="n"
          type="number"
          value={n}
          onChange={(event) => handleInputChange(event, 0, 100, updateN)}
          helperText={`Min: ${0} Max: ${100}`}
        />

        <TextField
          label="X"
          id="x"
          type="number"
          value={x}
          onChange={(event) => handleInputChange(event, 0, m * n, updateX)}
          helperText={`Min: ${0} Max: ${m * n}`}
        />
      </div>
    </div>
  );
};
