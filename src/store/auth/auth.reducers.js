import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./auth.actions";

const initialState = {
    isAuthenticated: false,
    error: null,
    showLogin: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        toggleLogin: (state) => {
            state.showLogin = !state.showLogin
        },
        closeLogin: (state) => {
            state.showLogin = false;
        }
    },
    extraReducers: builder => {
        builder
        .addCase(loginUser.fulfilled, (state, action) => {
            const { isAuthenticated } = action.payload;
            state.isAuthenticated = isAuthenticated;
        })

        .addCase(loginUser.rejected, (state, action) => {
            const { error } = action.payload;
            state.error = error;
            state.isAuthenticated = false;
        })
    }
})

export const { toggleLogin, closeLogin } = authSlice.actions;

export default authSlice.reducer;