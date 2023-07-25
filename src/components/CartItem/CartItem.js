import React from "react";
import "./CartItem.css";
import shoes from "../Product/shoes3.webp";
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';

const CartItem = () => {

    return(
        <div className="cart-item">
          <div className="cart-item-left">
            <div className="cart-item-image">
              <img src={shoes} alt="shose" />
            </div>
            <div className="item-content-info">
              <h3>KNU SKOOL SHOES</h3>
              <p>Size:<span> 2.5</span></p>
            <div className="update-delete-item">
              <div className="update item">
                <EditIcon />
                <p>EDIT</p>
              </div>
              <div className="delete item">
                <ClearIcon />
                <p>REMOVE ITEM</p>
              </div>
              </div>
            </div>
          </div>
          <div className="cart-item-right">
            <div className="select-quantity">
              <select id="select-quantity" name="select-quantity">
                <option value="option1">1</option>
                <option value="option2">2</option>
                <option value="option3">3</option>
                <option value="option4">4</option>
                <option value="option5">5</option>
                <option value="option1">6</option>
                <option value="option2">7</option>
                <option value="option3">8</option>
                <option value="option4">9</option>
                <option value="option5">10</option>
              </select>
            </div>
            <div className="price">
                <h3>$ 75.00</h3>
            </div>
          </div>
        </div>
    )
}

export default CartItem;