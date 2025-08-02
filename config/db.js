import mongoose from "mongoose";

const uri = "mongodb://localhost:27017/usersDataBase";

export default async function connectDb() {
  await mongoose
    .connect(uri)
    .then(console.log("MongoDB is connected"))
    .catch((err) => console.log(`MongoDB connection ${err}`));
}
