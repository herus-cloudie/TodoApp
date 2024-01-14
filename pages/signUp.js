import SignUpPage from "@/component/template/signUpPage";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";

export default function SignUp(){
    return <SignUpPage />
}
export async function getServerSideProps({req , res}) {
    const session = await getServerSession(req, res, authOptions)
    if(session){
        return {
            redirect : {
                destination: '/',
                permanent: false,
            }
        }
    }
    return {props: {}}
    
}