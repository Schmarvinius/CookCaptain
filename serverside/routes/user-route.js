const express = require("express");
const { addUser } = require("../controllers/user/create-user-controller");
const {
  getUserByID,
  getUserByEmail,
} = require("../controllers/user/get-user-controller");
const { deleteUser } = require("../controllers/user/delete-user-controller");
const { updateUser } = require("../controllers/user/update-user-controller");
const { login } = require("../controllers/user/login-controller");
const verifyToken = require("../controllers/auth");

const router = express.Router();
router.post("/", addUser);
router.get("/id", verifyToken, getUserByID);
router.get("/email", verifyToken, getUserByEmail);
router.delete("/", verifyToken, deleteUser);
router.patch("/", verifyToken, updateUser);
router.post("/login", login);

module.exports = router;
