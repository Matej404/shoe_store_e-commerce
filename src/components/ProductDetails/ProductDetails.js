import React from "react";
import './ProductDetails.css';
import { useSelector, useDispatch } from "react-redux";
import shoes from "../Product/shoes3.webp";
import CloseIcon from '@mui/icons-material/Close';
import { setSelectedProductId } from "../../store/products/product.reducers";

const ProductDetails = ({ productId }) => {
  const dispatch = useDispatch();
    const products = useSelector(state => state.products);
    const product = products[productId];

    const handleCloce = () => {
      dispatch(setSelectedProductId(null));
    }
    

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