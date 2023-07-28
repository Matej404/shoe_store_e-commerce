import { createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../apis/auth";

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async(credentials, thunkAPI) => {
        try {
            const response = await login(credentials);
            return {
                user: response,
                isAuthenticated: true
            }
        } catch(err) {
            throw err;
        }
    }
)