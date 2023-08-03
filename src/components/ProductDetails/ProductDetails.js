import React, { useEffect } from "react";
import './ProductDetails.css';
import { useSelector, useDispatch } from "react-redux";
import shoes from "../Product/shoes3.webp";
import CloseIcon from '@mui/icons-material/Close';
import { setSelectedProductId } from "../../store/products/product.reducers";
import { addItem } from "../../store/cart/cart.action";
import { loadProduct } from "../../store/products/products.actions";


const ProductDetails = ({ productId }) => {
  const dispatch = useDispatch();
    const products = useSelector(state => state.products);
    const product = products[productId];

    const handleCloce = () => {
      dispatch(setSelectedProductId(null));
    }

    async function handleAddToCart() {
      await dispatch(addItem(product));
    }
    
    
useEffect(() => {
  if (!products[productId]) {
    (async function load() {
      await dispatch(loadProduct(productId))
    })();
  }
}, [dispatch, products, productId]);

    return(
        <div className="product-details-container">
          <CloseIcon className="close" onClick={handleCloce} />
          <div className="product-image">
            <img src={shoes} alt="shoes" />
          </div>
          <div className="product-data-size-add">
            <div className="product-data">
              <h4 className="product-data-name">{product.name}</h4>
              <h4 className="product-data-description">{product.description}</h4>
              <h4 className="product-data-price">Price: ${product.price}</h4>
            </div>
            <div className="size-fit">
              <label htmlFor="my-select">SIZE & FIT</label>
              <select id="my-select" name="my-select">
                <option value="option1">Select a size</option>
                <option value="option2">2.5</option>
                <option value="option3">3</option>
                <option value="option4">3.5</option>
                <option value="option5">4</option>
              </select>
            </div>
            <div className="add-to-cart">
              <button onClick={handleAddToCart}>ADD TO CART</button>
            </div>
          </div>
        </div>
    )
}

export default ProductDetails;