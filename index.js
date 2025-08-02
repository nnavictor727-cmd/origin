import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import db from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/userRoute.js";

var port = 3000;
var app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));



db();


app.use("/auth", authRoute);
app.use("/user", userRoute);


app.listen(port, () => {
  console.log(`app is running on localhost:${port}`);
});
