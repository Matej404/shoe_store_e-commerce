import React from "react";
import "./Header.css";
import { Button } from "@mui/material";
import logo from "./logo.png";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const Header = () => {

    return(
        <div className="header">
          <div className="header-left">
            <img src={logo} /> 
            <h1>SHOESE</h1>
          </div>
          <div className="header-right">
            <Button className="login-buttom" variant="text">LOG IN</Button>
            <AddShoppingCartIcon className="cart" />
          </div>
        </div>
    )
}

export default Header;