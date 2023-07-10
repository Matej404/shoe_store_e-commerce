import { combineReducers } from "@reduxjs/toolkit";
import productReducers from "./products/product.reducers";

export default combineReducers({
    products: productReducers
})