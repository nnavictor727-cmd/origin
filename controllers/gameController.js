import user from "../models/users.js";



 export default async function updateScore(id){
    if(id){}
    
       await user.findById(id).then((player)=>{
            player.updateOne({
                name: player.name,
                email: player.email,
                password: player.password,
                score: player.score
            }).catch(err => console.log(err))

    })
    }



