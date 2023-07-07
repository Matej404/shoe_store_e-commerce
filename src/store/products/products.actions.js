import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProduct } from "../../apis/product";

export const loadProducts = createAsyncThunk(
    'products/loadProducts',
    async(params, thunkAPI) => {
        try {
            const response = await fetchProduct();
            
            return {
                product: response
            }
        } catch(err) {
            throw err;
        }
    }
)