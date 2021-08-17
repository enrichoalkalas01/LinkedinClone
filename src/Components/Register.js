import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { auth } from './App/Firebase'
import { login } from './App/userSlice'

const Register = () => {
    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ fullname, setFullname ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ profilePic, setProfilePic ] = useState("")

    const dispatch = useDispatch()

    const RegisterClick = (e) => {
        console.log(username, password, fullname, email)
        if ( !username ) {
            alert('Username must be filled')
        } else {
            auth.createUserWithEmailAndPassword(email, password)
            .then(userAuth => {
                userAuth.user.updateProfile({
                    username: username,
                    displayName: fullname,
                    photoURL: profilePic,
                }).then(() => {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        username: username,
                        displayName: fullname,
                        photoURL: profilePic,
                    }))

                    window.location.href = "/"
                })
            }).catch(err => {
                alert(err.message)
            })
        }
    }

    return(
        <section id="login" className="register">
            <div className="wrapper-login">
                <div className="form">
                    <div className="wrapper-box-login logo">
                        <span>Linked</span>
                        <i className="fab fa-linkedin"></i>
                    </div>
                    <div className="wrapper-box-login">
                        <input onChange={ e => setFullname(e.target.value) } type="text" id="fullname" placeholder="fullname here... " />
                    </div>
                    <div className="wrapper-box-login">
                        <input onChange={ e => setUsername(e.target.value) } type="text" id="username" placeholder="username here... " />
                    </div>
                    <div className="wrapper-box-login">
                        <input onChange={ e => setPassword(e.target.value) } type="password" id="password" placeholder="password here... " />
                    </div>
                    <div className="wrapper-box-login">
                        <input onChange={ e => setEmail(e.target.value) } type="text" id="email" placeholder="email here... " />
                    </div>
                    <div className="wrapper-box-login">
                        <input onChange={ e => setProfilePic(e.target.value) } type="text" id="profilePic" placeholder="Url for Profile Picture here... " />
                    </div>
                    <div className="wrapper-box-login">
                        <button type="button" onClick={ RegisterClick }>Register</button>
                    </div>
                    <div className="wrapper-box-login">
                        <span>Have any account here ? <a href="/">Login</a></span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register