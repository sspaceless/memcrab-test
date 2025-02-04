import { MatrixProvider } from "~/modules/matrix/matrix.provider";

export const withMatrix = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P> => {
  const WithMatrix: React.FC<P> = (props) => (
    <MatrixProvider>
      <Component {...props} />
    </MatrixProvider>
  );

  return WithMatrix;
};
