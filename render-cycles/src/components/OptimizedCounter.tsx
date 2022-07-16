import { memo } from "react";

function OptimizedCounter({ count, baseCount, increment }: any) {
  console.log(`OptimizedCounter render`);

  return (
    <div>
      <b>
        OptimizedCounter Count:{count}, Base Count: {baseCount}{" "}
      </b>
      <a href="#" onClick={() => increment()}>
        Increase
      </a>
    </div>
  );
}

export default memo(OptimizedCounter);
