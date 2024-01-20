import ConnectionDB from "@/utils/connectionDB";
import UserTodo from "@/utils/model";
import { compare } from "bcryptjs";

import nextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

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
                console.log(await user)
                if(!user) throw new Error('user does not exist') 

                if(! await compare(password , user.password)) throw new Error('password is not match')
                return { email : email , name : user.name }
            }
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET ,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ,
        })
    ]
}

export default nextAuth(authOptions);