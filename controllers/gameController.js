import User from "../models/users.js";

var gameController = {
  updateScore: async (req, res) => {
      var {id ,score} = req.body
      
      await User.findOne({_id: Object(id)})
       .then( user => user.updateOne({score : score }))
      
          

    res.status(200).json({message: "received score"})
  },
};

export default gameController;
