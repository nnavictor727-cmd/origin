import User from "../models/users.js";
const random = Math.floor(Math.random() * 1000000000000);

const authController = {
  registerController: async (req, res) => {
    var { name, email, password } = req.body;
    var newUser = {
      name: name,
      email: email,
      password: password,
      score: 0,
    };
    res.status(201).json({ message: "successfully registered" });
    User.insertOne(newUser);
  },
  loginController: async (req, res) => {
    const { email, password } = req.body;

    const myUser = User.findOne({ email: email });
    await myUser
    .then(myUser => {
        if (!myUser) {
            res.status(404).json({ message: "invalid email" });
            } else if (myUser.password != password) {
            res.status(404).json({ message: "Incorrect password" });
            } else {
            res.status(200).json({
                message: "login successful",
                token: myUser._id,
                score: myUser.score,
            });
            }
        })
  },
};
export default authController;
