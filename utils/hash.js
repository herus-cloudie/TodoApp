import { hash } from "bcryptjs";

export default async function Hash(password){
    const hashedpass = await hash(password , 12)
    return hashedpass;
}