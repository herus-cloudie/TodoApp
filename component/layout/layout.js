import { VscListSelection } from "react-icons/vsc";
import { BiMessageSquareAdd } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import { PiSignInBold } from "react-icons/pi";
import { BiCalendar } from "react-icons/bi";
import { BsGithub } from "react-icons/bs"

import Link from "next/link";
import { useRouter } from "next/router";
import {signOut, useSession } from "next-auth/react";
import Tooltip from "../module/tooltip";

export default function Layout({_app}){
    let router = useRouter()
    let session = useSession()
    return(
        <>
            <header>
                    <p>Moslemi todo app</p>
                    {
                        router.pathname != '/signUp' 
                        ? session.data 
                        ? <div className="session-header">
                            <div className="welcome-header">
                            {
                            session.data.user.image
                            ? <img className="image-header" src={session.data.user.image}/>
                            : <h3 className="name-header">{session.data.user.name}</h3>
                            }
                            </div>
                        </div>
                        : <Link href={'/signUp'}><button class="button-signIn">Log in<PiSignInBold /></button></Link>
                        : null
                    }
                    
            </header>
            <div className="container--main">
                <aside>
                    {
                        session.status == 'authenticated'
                        ? <>
                            <p>Welcome 👋</p>
                            <ul>
                                <li>
                                    <VscListSelection />
                                    <Link href="/">Todos</Link>
                                </li>
                                <li>
                                    <BiMessageSquareAdd />
                                    <Link href="/addTodo">Add Todo</Link>
                                </li>
                                <li>
                                    <BiCalendar />
                                    <Link href="/calendar">Calendar</Link>
                                </li>
                                <li>
                                    <RxDashboard />
                                    <Link href="/profile">Profile</Link>
                                </li>
                                { 
                                    <button onClick={() => signOut()} className="sign-out-button">
                                        <span className="shadow"></span>
                                        <span className="edge"></span>
                                        <span className="front text"> Log out </span>
                                    </button>   
                                }
                                <div className="card-content">
                                    <a href="https://github.com/herus-cloudie" className="socialContainer containerOne">
                                    <path className="socialSvg githubSvg"><h3><BsGithub/></h3></path>
                                    </a> 
                                    <a href="https://linkedin.com/in/amirmohammad-moslemi" className="socialContainer containerThree">
                                        <svg className="socialSvg linkdinSvg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                                    </a>  
                                </div>
                            </ul>
                        </>
                        :<>
                        <p>Welcome 👋</p>
                        <ul>
                            <li>
                                <VscListSelection />
                                <del><Link href="">Todos</Link></del>
                            </li>
                            <li>
                                <BiMessageSquareAdd />
                                <del><Link href="">Add Todo</Link></del>
                            </li>
                            <li>
                                <BiCalendar />
                                <Link href="/calendar">Calendar</Link>
                            </li>
                        </ul>
                         </>
                    }
                </aside>
                <section>{_app}</section>
            </div>
            <Tooltip />
        </>
    )
}