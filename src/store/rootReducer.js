import { combineReducers } from "redux";
import productReducers from "./products/product.reducers";

export default combineReducers({
    products: productReducers
})