import { cn } from "../lib/utils";

const inputDefaultClasses =
  "ease w-full rounded-md border border-slate-200 bg-transparent px-3 py-2 text-sm text-slate-700 shadow-sm transition duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-slate-400 focus:shadow focus:outline-none";

type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export const TextField: React.FC<TextFieldProps> = ({
  id,
  className,
  label,
  ...props
}) => {
  return (
    <div className="flex w-full max-w-sm min-w-[200px] flex-row items-center gap-2">
      <span className="block text-sm text-slate-600">{label}</span>
      <input
        id={id}
        className={cn(inputDefaultClasses, className)}
        {...props}
      />
    </div>
  );
};
