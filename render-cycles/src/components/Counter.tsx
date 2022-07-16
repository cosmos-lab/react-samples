import { useCallback, useRef, useState } from "react";
import OptimizedCounter from "./OptimizedCounter";
import UnOptimizedCounter from "./UnOptimizedCounter";

function Counter({ label, baseCount }: any) {
  console.log(`Counter render`);
  const [count, setCount] = useState(baseCount);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const incrementU = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>
        Counter Label {label} {count}{" "}
        <a href="#" onClick={() => setCount(count + 1)}>
          Increase
        </a>
      </div>
      <OptimizedCounter
        baseCount={baseCount}
        count={count}
        increment={increment}
      />
      <UnOptimizedCounter
        baseCount={baseCount}
        count={count}
        increment={incrementU}
      />
    </div>
  );
}

export default Counter;
