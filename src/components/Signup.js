import React from 'react'
import './css/signup.css';
import Navbar from './Navbar'
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className='signupcontainer'>
        <Navbar/>
        <div className='signup2ndcontainer'>
          <div className='signuptitlebox '>
            <p className='signuptitle'>NAME</p>
          </div>
          <div className='signuptitlebox signupemail'>
            <p className='signuptitle  signupmailname'>EMAIL</p>
          </div>
          <div className='signuptitlebox phoneno'>
            <p className='signuptitle  phonenoname'>PHONE NUMBER</p>
          </div>
          <div className='signuptitlebox otpbox'>
            <p className='otp'>SEND OTP</p>
          </div>
          <p className='codebox'>Didn’t Receive It?</p>
          <p className='codebox resend'>RESEND</p>
          <div className='signuptitlebox otpcontainer'>
            <p className='signuptitle'>OTP</p>
          </div>
          <Link to ="/profile">
          <div className='signuptitlebox boxsignup'>
            <p className='boxsignuptext'>SIGN UP</p>
          </div>
          </Link>

          <p className='codebox Alreadyacc'>Already Have An Account?</p>
          <Link to ="/profile">
          <p className='codebox btnlog'>Log In</p>
          </Link>

        </div>
    </div>
  )
}

export default Signup;