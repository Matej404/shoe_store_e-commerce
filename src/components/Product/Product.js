import React, {setState} from "react";
import shoes from "./shoes3.webp";
import "./Product.css";

const Product = ({ photo, name, description, price }) => {

    return(
        <div className="product">
          <div className="shoe-cont">
            <img src={shoes} alt="shoes" />
            <div className="shoes-data">
              <h3 className="shoe-name">{name}</h3>
              <p className="shoe-description">{description}</p>
              <p className="shoe-price">{price}</p>
            </div>
          </div>
        </div>
    )
}

export default Product;