import React, { Profiler } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

function onRenderCallback(
  id: any,
  phase: any,
  actualDuration: any,
  baseDuration: any,
  startTime: any,
  commitTime: any,
  interactions: any
) {
  console.log({
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions,
  });
}

root.render(
  <Profiler id="profiler" onRender={onRenderCallback}>
    <App />
  </Profiler>
);

reportWebVitals((m: any) => {});
