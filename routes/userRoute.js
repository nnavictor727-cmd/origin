import express from 'express';
import checkToken from '../middleware/authMiddleware.js'

const Router = express.Router();





Router.get("/profile", checkToken, (req, res)=>{
    res.status(200).json({message: "Your user profile"})
})




export default Router