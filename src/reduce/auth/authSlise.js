import { createSlice } from "@reduxjs/toolkit";
import { register } from "./authOperations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: 
        (builder) => {
            builder
                 .addCase(register.pending, (state, action) => {
                    return state

                } )
                .addCase(register.fulfilled, (state, action) => {
                    state.user = action.payload.user;
                    state.token = action.payload.token;
                    state.isLoggedIn = true;

                } )
        }
    
    
})
export const authReducer = authSlice.reducer;
