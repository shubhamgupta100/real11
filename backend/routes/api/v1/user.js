const express = require("express");
const router = express.Router();
const {
  register,
  login,
  logout,
} = require("../../../controller/userController");

router.post("/user/register", register);
router.post("/user/login", login);
router.get("/user/logout", logout);

module.exports = router;
