import ConnectionDB from "@/utils/connectionDB";
import UserTodo from "@/utils/model";
import { compare } from "bcryptjs";
import nextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { use } from "react";
export const authOptions = {
    strategy : {session : 'jwt'},
    secret: process.env.NEXTAUTH_SECRET,
    providers : [
        Credentials({
            async authorize(state){
                let {email , password} = state;
                try {
                    ConnectionDB()
                } catch (err) {
                    throw new Error('problem at connecting to DataBase')
                }
                let user = await UserTodo.findOne({email : email})
                if(!user) throw new Error('user does not exist') 

                if(! await compare(password , user.password)) throw new Error('password is not match') 
                return { email }
            }
        }),
        GithubProvider({

        }),
        GoogleProvider({

        })
    ]
}

export default nextAuth(authOptions);