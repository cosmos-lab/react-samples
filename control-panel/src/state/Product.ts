import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    list: [],
  },
  reducers: {
    setProductList: (state: any, action: PayloadAction<any>): any => {
      return {
        ...state,
        list: action.payload,
      };
    },
  },
});

export const { setProductList } = authSlice.actions;
export default authSlice.reducer;
