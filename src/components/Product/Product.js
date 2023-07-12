import React from "react";
import shoes from "./shoes3.webp";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ photo, name, description, price, productId }) => {

    return(
        <div className="product" >
          <div className="shoe-cont">
            <img src={shoes} alt="shoes" />
            <div className="shoes-data">
              <h3 className="shoe-name">{name}</h3>
              <p className="shoe-description">{description}</p>
              <p className="shoe-price">{price}</p>

                        <Link to={`/products/${productId}`}>
            <button>VIEW</button>
          </Link>
            </div>
          </div>
        </div>
    )
}

export default Product;