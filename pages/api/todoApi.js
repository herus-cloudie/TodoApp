import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";
import UserTodo from "@/utils/model";
import ConnectionDB from "@/utils/connectionDB";
import SortedData from "@/utils/sortedData";

export default async function handler(req , res){
    try {
        ConnectionDB()
    } catch (err) {
        console.log(err)
        res.status(500).json({status : 'faild' , message : 'problem in connecting to DB'})
    }
    let session = await getServerSession(req , res , authOptions)
    let user = await UserTodo.findOne({email : session.user.email})

    if (req.method === 'GET'){
        let sortedData = SortedData(user.todo)
        res.status(200).json({status : 'success', data : sortedData})
    }

    if (req.method === 'POST'){
        let {title , status , confirmDescription} = req.body
        user.todo.push({title , status , confirmDescription})
        await user.save();
        res.status(200).json({data : user})
    }
    
}