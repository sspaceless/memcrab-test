import { useMatrix } from "../matrix.hook";

export const MatrixHead: React.FC = () => {
  const { matrix } = useMatrix();

  const n = matrix[0]?.length ?? 0;

  return (
    <tr className="border-b border-slate-400">
      <td className="border-r border-slate-400" />
      {[...Array(n)].map((_, index) => (
        <td key={index} className="p-2 text-sm">
          N = {index + 1}
        </td>
      ))}
      <td className="border-l border-slate-400 px-2">Sum</td>
      <td className="border-b border-white" />
    </tr>
  );
};
