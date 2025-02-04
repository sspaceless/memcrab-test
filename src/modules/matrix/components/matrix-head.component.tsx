import { useMatrix } from "../matrix.hook";

export const MatrixHead: React.FC = () => {
  const { matrix } = useMatrix();

  const n = matrix[0]?.length ?? 0;

  return (
    <tr>
      <td></td>
      {[...Array(n)].map((_, index) => (
        <td key={index} className="border px-2">
          N = {index + 1}
        </td>
      ))}
      <td className="border px-2">Sum</td>
    </tr>
  );
};
