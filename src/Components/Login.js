import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from './App/Firebase'
import { login } from './App/userSlice'
import userSlice from './App/userSlice'

const Login = () => {
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    const dispatch = useDispatch()

    const LoginClick = (e) => {
        console.log(email, password)
        auth.signInWithEmailAndPassword(email, password)
        .then(resAuth => {
            console.log(resAuth)
            dispatch(
                login({
                    uid: resAuth.user.uid,
                    displayName: resAuth.user.displayName,
                    email: resAuth.user.email,
                    photoUrl: resAuth.user.photoURL,
                })
            )
        }).catch(err => {
            alert(err.message)
        })
    }

    return(
        <section id="login">
            <div className="wrapper-login">
                <div className="form">
                    <div className="wrapper-box-login logo">
                        <span>Linked</span>
                        <i className="fab fa-linkedin"></i>
                    </div>
                    <div className="wrapper-box-login">
                        <input onChange={ e => setEmail(e.target.value) } type="text" id="email" placeholder="email here... " />
                    </div>
                    <div className="wrapper-box-login">
                        <input onChange={ e => setPassword(e.target.value) } type="password" id="password" placeholder="password here... " />
                    </div>
                    <div className="wrapper-box-login">
                        <button type="button" onClick={ LoginClick }>Login</button>
                    </div>
                    <div className="wrapper-box-login">
                        <span>Dont have any account here ? <a href="/register">Register</a></span>
                    </div>
                </div>
            </div>
        </section>
    )    
}

export default Login