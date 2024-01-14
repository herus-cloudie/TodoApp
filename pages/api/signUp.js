import ConnectionDB from "@/utils/connectionDB";
import Hash from "@/utils/hash";
import UserTodo from "@/utils/model";

export default async function handler(req , res){
    if (req.method !== 'POST') res.status(500).json({status : 'falid' , message : 'wrong request method!'});
    try {
        ConnectionDB()
    } catch (err) {
        console.log(err)
        res.status(500).json({status : 'faild' , message : 'problem in connecting to DB'})
    }
    let {email , password} = req.body;

    let existUser = await UserTodo.findOne({email : email})
    if(existUser) return res.status(424).json({status : 'faild' , message : "user does exist"})

    password = await Hash(password)
    
    let user = await UserTodo.create({email , password})
    
    res.status(200).json({status : 'success' , data : user})
}