import { VscListSelection } from "react-icons/vsc";
import { BiMessageSquareAdd } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import { PiSignInBold } from "react-icons/pi";
import Link from "next/link";

export default function Layout({_app}){
    return(
        <>
        <header>
            <p>Moslemi todo app</p>
            <Link href={'/signUp'}><PiSignInBold /></Link>
        </header>
        <div className="container--main">
            <aside>
            <p>Welcome 👋</p>
            <ul>
                <li>
                <VscListSelection />
                <Link href="/">Todos</Link>
                </li>
                <li>
                <BiMessageSquareAdd />
                <Link href="/add-todo">Add Todo</Link>
                </li>
                <li>
                <RxDashboard />
                <Link href="/profile">Profile</Link>
                </li>
            </ul>
            </aside>
            <section>{_app}</section>
      </div>
      </>
    )
}