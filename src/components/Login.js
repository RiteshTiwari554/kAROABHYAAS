import React from 'react'
import './css/login.css'
import Navbar from './Navbar'
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className='loginpg'>
        <Navbar/>
        <div className='gp7'>
            <div className='loginname' >
                    <p className='loginprintname'>USERNAME</p>
            </div>
            <div className='loginname loginpass' >
                    <p className='loginprintname'>PASSWORD</p>
            </div>
            <Link to ="/dashboard">
            <div className='loginbtn'>
                <p className='loginbtnname'>LOGIN</p>
            </div>
            </Link>
            <p className='loginsignuptxt'>Don’t have an account?</p>
            <Link to ="/signup">
            <span className='loginsignuptxt signlink'>Sign Up</span>
            </Link>
        </div>

    </div>
  )
}

export default Login