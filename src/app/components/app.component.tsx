import React from "react";

import { Form } from "~/modules/form/form.component";
import { Matrix } from "~/modules/matrix/matrix.component";

const App: React.FC = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <Form />
      <Matrix />
    </div>
  );
};

export default App;
