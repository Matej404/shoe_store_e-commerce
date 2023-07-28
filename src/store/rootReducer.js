import { combineReducers } from "@reduxjs/toolkit";
import productReducers from "./products/product.reducers";
import authReducers from "./auth/auth.reducers";

export default combineReducers({
    products: productReducers,
    auth: authReducers
})