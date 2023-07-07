import React, { useEffect } from "react";
import './Home.css';
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "../store/products/products.actions";

const Home = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);

    useEffect(() => {
        const load = async() => {
            await dispatch(loadProducts());
        }
        load()
    }, [dispatch])

    return(
        <div className="home">
          
        </div>
    )
}

export default Home;