import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    user:{}
  },
  reducers: {
    setLogin: (state: any, action: PayloadAction<boolean>): any => {
      return {
        ...state,
        isLoggedIn:action.payload,
        user:{name:"Cosmos Lab"}
      }
    },
  },
});

export const { setLogin } = authSlice.actions;
export default authSlice.reducer;
