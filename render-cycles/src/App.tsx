import { useState } from "react";
import Counter from "./components/Counter";

function App(props: any) {
  const [label, setLabel] = useState("My Counter");
  const [baseCount, setBaseCount] = useState(1);

  return (
    <>
      <input
        type="text"
        value={label}
        onInput={(e: any) => setLabel(e.target.value)}
        placeholder="Label"
      />
      <input
        type="text"
        value={baseCount}
        onInput={(e: any) => setBaseCount(e.target.value)}
        placeholder="Base count"
      />
      <br />
      <hr />
      <Counter label={label} baseCount={baseCount} />
    </>
  );
}

export default App;
