import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]"

import HomePage from "@/component/template/homePage"

export default function Home() {
  return <HomePage />
}

export async function getServerSideProps({req , res}){
  let session = await getServerSession(req , res , authOptions)
  if(!session){
    return {
      redirect : {
        destination : '/signUp',
        permanent: false
      }
    }
  }
  else return { props : {}}
} 