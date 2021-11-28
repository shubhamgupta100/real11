import React from "react";
import Button from "@material-ui/core/Button";
import "./navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="heading">
          <h2>Ecommerce</h2>
        </div>
        <div className="login_signup_btn">
          <Button
            variant="outlined"
            color="primary"
            style={{ borderRadius: 50 }}
          >
            LogIn/SignUp
          </Button>
        </div>
      </div>
      {/* <hr color="lightgray" /> */}
    </>
  );
}
