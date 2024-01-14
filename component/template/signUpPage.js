import { useState } from "react";

import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

import {signIn} from 'next-auth/react'
import Loading from "../module/customLoading/loading";
import { useRouter } from "next/router";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default function SignUpPage(){
    let [err , setErr] = useState('')
    let [loading , setLoading] = useState(false)
    let router = useRouter()
    let [signStatus , setSignStatus] = useState(false)
    const statusHandler = () => {
        setSignStatus(!signStatus)
        setErr('')
    }

    let [signUpState , setSignUpState] = useState({
        name : '',
        email : '',
        password : '',
        reapetedPassword : '',
    })
    const changeSignUpHandler = (e) => setSignUpState({...signUpState , [e.target.name] : e.target.value})

    let [signInState , setSignInState] = useState({
        email : '',
        password : ''
    })
    const changeSignInHandler = (e) => setSignInState({...signInState , [e.target.name] : e.target.value})

    const signUpHandler = async () => {
        if(!signUpState.email || !signUpState.password || !signUpState.name || !signUpState.reapetedPassword) return setErr('please fill all input')
        else if(signUpState.password.length < 6) return setErr('your password should be more than 6 character')
        else if(signUpState.password !== signUpState.reapetedPassword) return setErr('your passwords is not match!')
        else if(!signUpState.email.includes('@') || signUpState.email.length < 6) return setErr('your email is not valid')
        else{
            setErr('')
            setLoading(true)
            let progress = await fetch('/api/signUp' , {
                method : 'POST',
                body : JSON.stringify(signUpState),
                headers: {'Content-Type': 'application/json'}
            })
            let Data = await progress.json()
            setLoading(false)
            if(Data.status == 'faild') setErr(Data.message)
            console.log(Data)
        }
    }

    const signInHandler = async () => {
        if(!signInState.email || !signInState.password) return setErr('please fill all input')
        setLoading(true)
        let data = await signIn('credentials' , {
            password : signInState.password,
            email : signInState.email,
            redirect : false
        })
        data.ok ? router.push('/') : setErr(data.error)
        setLoading(false)
    }
    
    return(
        <div className="form-margin">
            <div className={`${signStatus ? "right-panel-active" : "null"} container`} id="container">
                <div className="form-container sign-up-container">
                    <div className="form">
                        <h1 className="h1form">Create Account</h1>
                        <div className="social-container">
                            <a href="#" className="a-form social"><i className="fab fa-facebook-f"><FcGoogle/></i></a>
                            <a href="#" className="a-form social"><i className="fab fa-google-plus-g"><BsGithub /></i></a>
                        </div>
                        <span>or use your email for registration</span>
                        <input className="input-form" name="name" onChange={changeSignUpHandler} type="text" placeholder="Name" />
                        <input className="input-form" name="email" onChange={changeSignUpHandler} type="email" placeholder="Email" />
                        <input className="input-form" name="password" onChange={changeSignUpHandler} type="password" placeholder="Password" />
                        <input className="input-form" name="reapetedPassword" onChange={changeSignUpHandler} type="password" placeholder="reapet Password" />
                        {
                            loading ? <Loading /> : null
                        }
                        {
                            err.length > 0 ? <p style={{color : 'red' , fontWeight: 600 , fontFamily: 'system-ui'}}>{err}</p> : null
                        }
                        <button onClick={signUpHandler} className="signform">Register</button>
                    </div>
                </div>
                <div className="form-container sign-in-container">
                    <div className="form">
                        <h1 className="h1form">Sign in</h1>
                        <div className="social-container">
                            <a href="#" className="a-form social"><i className="fab fa-facebook-f"><FcGoogle/></i></a>
                            <a href="#" className="a-form social"><i className="fab fa-google-plus-g"><BsGithub /></i></a>
                        </div>
                        <span>or use your account</span>
                        <input className="input-form" name="email" onChange={changeSignInHandler} type="email" placeholder="Email" />
                        <input className="input-form" name="password" onChange={changeSignInHandler} type="password" placeholder="Password"/>
                        {
                            loading ? <Loading /> : null
                        }
                        {
                            err.length > 0 ? <p style={{color : 'red' , fontWeight: 600 , fontFamily: 'system-ui'}}>{err}</p> : null
                        }
                        <button onClick={signInHandler} className="signform">Sign In</button>
                    </div>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p className="p-form">To keep connected with us please login with your personal info</p>
                            <button onClick={statusHandler} className="signform ghost" id="signIn">Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p className="p-form">Enter your personal details and start journey with us</p>
                            <button onClick={statusHandler} className="signform ghost" id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

