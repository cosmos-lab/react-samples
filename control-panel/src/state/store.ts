import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import authSlice from "./Auth";
import productSlice from "./Product";

const store: any = {
  reducer: {
    auth: authSlice,
    product: productSlice,
  },
};

export default configureStore(store);
