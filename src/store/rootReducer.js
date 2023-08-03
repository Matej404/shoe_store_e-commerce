import { combineReducers } from "@reduxjs/toolkit";
import productReducers from "./products/product.reducers";
import authReducers from "./auth/auth.reducers";
import cartReducers from "./cart/cart.reducers";

export default combineReducers({
    products: productReducers,
    auth: authReducers,
    cart: cartReducers
})