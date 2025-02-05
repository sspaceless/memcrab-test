import { cn } from "../lib/utils";

const inputDefaultClasses =
  "ease w-full flex flex-row rounded-md border border-slate-100 bg-transparent text-sm text-slate-700 shadow-sm transition duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-slate-400 focus:shadow focus:outline-none";

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
    <div className={cn(inputDefaultClasses, className)}>
      <div className="rounded-l-md bg-slate-100 px-3 py-2">{label}</div>
      <input
        id={id}
        className="rounded-r-md px-3 py-2 outline-none"
        {...props}
      />
    </div>
  );
};
