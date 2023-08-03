import React from "react";
import "./Header.css";
import { Button } from "@mui/material";
import logo from "./logo.png";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Header = ({ onLoginClick }) => {
  const { isAuthenticated } = useSelector(state => state.auth);

    return(
        <div className="header">
          <div className="header-left">
            <img src={logo} alt="shoe" /> 
            <h1>SHOESE</h1>
          </div>
          <div className="header-right">
            {!isAuthenticated && 
            <Button className="login-buttom" variant="text" onClick={onLoginClick} >LOG IN</Button>}
            {isAuthenticated && 
            <Link className="cart" to={`/cart`}>
              <AddShoppingCartIcon className="cart" />
            </Link>}
          </div>
        </div>
    )
}

export default Header;