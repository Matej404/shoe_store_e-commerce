import React, { useEffect } from "react";
import './ProductDetails.css';
import { useDispatch, useSelector } from "react-redux";
import { loadProduct } from "../../store/products/products.actions";
import { useParams } from "react-router-dom";
import shoes from "../Product/shoes3.webp";

const ProductDetails = () => {
    //access the parameters from the URL
    const { productId } = useParams();
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);
    const product = products[productId];

    useEffect(() => {
        const load = async() => {
            await dispatch(loadProduct(productId))
        }
        load()
    }, [dispatch, productId]);

    return(
        <div className="product-details-container">
          <div className="product-image">
            <img src={shoes} alt="shoes" />
          </div>
          <div className="product-data-size-add">
            <div className="product-data">
              <h4 className="product-data-name">VANS CLASIC</h4>
              <h4 className="product-data-description">OLD SKOOL SHOES</h4>
              <h4 className="product-data-price">Price: $65.00</h4>
            </div>
            <div className="size-fit">
              <label for="my-select">SIZE & FIT</label>
              <select id="my-select" name="my-select">
                <option value="option1">Select a size</option>
                <option value="option2">2.5</option>
                <option value="option3">3</option>
                <option value="option4">3.5</option>
                <option value="option5">4</option>
              </select>
            </div>
            <div className="add-to-cart">
              <button>ADD TO CART</button>
            </div>
          </div>
        </div>
    )
}

export default ProductDetails;