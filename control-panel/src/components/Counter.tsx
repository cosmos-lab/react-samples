import { useEffect, useRef, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current++;
    const interval = setTimeout(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearTimeout(interval);
  });
  return (
    <div>
      <span>{count} seconds / <span>{renderCount.current} times rendered</span></span>
      <span onClick={() => setCount(0)} className="link ml2">
        Reset
      </span>
    </div>
  );
}

export default Counter;
