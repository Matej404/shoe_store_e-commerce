import React, { useEffect } from "react";
import './Cart.css';
import CartItem from "../CartItem/CartItem";
import { useSelector, useDispatch } from "react-redux"; 
import { loadCart } from "../../store/cart/cart.action";

const Cart = () => {
    const dispatch = useDispatch();
    const { carts } = useSelector(state => state.carts);
    console.log(carts);

    useEffect(() => {
        const load = async() => {
            await dispatch(loadCart());
        }
        load();
    }, [dispatch])

    return(
        <div className="cart">     
           { Object.keys(carts).map((cartId) => {
            const cart = carts[cartId];
            const item = cart?.item;
            return (
                <div key={cartId}>
                  <CartItem
                    description={item?.description}
                    name={item?.name}
                    cartId={cartId}
                   />
                </div>
            )
          }) }
        </div>
    )
}


export default Cart;