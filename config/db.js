import mongoose from "mongoose";

const uri = "mongodb://localhost:27017/usersDataBase";

export default async function connectDb() {
  await mongoose
    .connect(uri)
    .then( e =>{
       if (e){
        console.log("MongoDB is Connected")
      }
      }
    )
    .catch((err) => console.log(err));
}
