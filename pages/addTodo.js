import AddTodoPage from "@/component/template/addTodoPage";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";

export default function AddTodo(){
    return <AddTodoPage />
}

export async function getServerSideProps({req , res}) {

    const session = await getServerSession(req, res, authOptions)
    if(!session){
        return {
            redirect : {
                destination: '/',
                permanent: false,
            }
        }
    }
    return {props: {}}
    
}