import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./navbar.css";

export default function Navbar() {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <>
      <div className="navbar">
        <div className="heading">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h2>Ecommerce</h2>
          </Link>
        </div>
        <div className="right_container">
          <div className="cart">
            <Link to="/cart" style={{ textDecoration: "none" }}>
              <AddShoppingCartIcon />
              <b className="cart_Item">
                {cartItems.length > 0 ? cartItems.length : ""}
              </b>
            </Link>
          </div>
          <div className="login_signup_btn">
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                color="primary"
                style={{ borderRadius: 50 }}
              >
                LogIn/SignUp
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
