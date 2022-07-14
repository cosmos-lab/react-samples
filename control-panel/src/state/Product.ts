import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "auth",
  initialState: {
    list: [],
    isLoading: false,
  },
  reducers: {
    setProductLoading: (state: any, action: PayloadAction<boolean>) => {
      return {
        ...state,
        isLoading: action.payload,
      };
    },
    setProductList: (state: any, action: PayloadAction<any>): any => {
      return {
        ...state,
        list: action.payload,
      };
    },
  },
});

export const { setProductList, setProductLoading } = productSlice.actions;
export default productSlice.reducer;
