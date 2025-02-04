type MatrixHeadProps = {
  n: number;
};

export const MatrixHead: React.FC<MatrixHeadProps> = ({ n }) => {
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
