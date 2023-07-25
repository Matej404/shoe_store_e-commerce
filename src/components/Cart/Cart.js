import React from "react";
import './Cart.css';
import CartItem from "../CartItem/CartItem";

const Cart = () => {

    return(
        <div className="cart">
            <CartItem />
            <CartItem />
            <CartItem />
        </div>
    )
}


export default Cart;