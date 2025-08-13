import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: { type: String, required: true },
  score: Number
});

const User = mongoose.model("user", userSchema);

export default User;
