import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import makeServer from "./services/mirage"
import "./services/mirage.ts"

import store from "./state/store";
import App from "./App";



const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" })
}
reportWebVitals();
