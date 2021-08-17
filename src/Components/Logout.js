import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './App/userSlice'

const Logout = () => {
    const user = useSelector(selectUser)
    user ? console.log(user) : window.location.href = "/"
}

export default Logout