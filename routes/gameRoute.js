import express, { Route } from "express";
import gameController from "../controllers/gameController.js";

const Router = express.Router();


Router.post('/updateScore' ,(req , res) => {
  gameController.updateScore(req , res)
})


export default Router