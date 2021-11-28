import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import Button from "@material-ui/core/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CreateIcon from "@material-ui/icons/Create";
import { logout } from "../../actions/userAction";

import "./navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);
  const alert = useAlert();
  const dispatch = useDispatch();
  const createProduct = () => {
    navigate("/products/new");
  };
  const logoutUser = () => {
    dispatch(logout());
    alert.success("Logged out successfully !");
    navigate("/");
  };
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
            {localStorage.getItem("real11_email") ? (
              <>
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<CreateIcon />}
                  style={{ borderRadius: 50, marginRight: 20 }}
                  onClick={createProduct}
                >
                  Create Product
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  style={{ borderRadius: 50 }}
                  onClick={logoutUser}
                >
                  Logout
                </Button>
              </>
            ) : (
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button
                  variant="outlined"
                  color="primary"
                  style={{ borderRadius: 50 }}
                >
                  LogIn/SignUp
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
