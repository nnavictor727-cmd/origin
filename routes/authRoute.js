import express from "express";
import user from "../models/users.js";
import checkToken from "../middleware/authMiddleware.js";
import authController from "../controllers/authController.js";

const Router = express.Router();

Router.post("/register", (req, res) => {
  authController.registerController(req, res);
});
Router.post("/login", checkToken, (req, res) => {
  authController.loginController(req, res);
});

Router.get("/bonus", (req, res) => {
  //const { username, password } = req.body;

  //conditionals

  res.json({ message: "you have receive 100% bonus for visiting this server" });
});

Router.post("/email-verification", (req, res) => {
  const { username, password } = req.body;

  //conditionals

  //response
});

export default Router;
