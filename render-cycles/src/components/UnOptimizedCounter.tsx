function UnOptimizedCounter({ count, baseCount,increment }: any) {
  console.log(`UnOptimizedCounter render`);

  return (
    <div>
      <b>
        UnOptimizedCounter Count:{count}, Base Count: {baseCount}{" "}
      </b>{" "}
      <a href="#" onClick={() => increment()}>
        Increase
      </a>
    </div>
  );
}

export default UnOptimizedCounter;
