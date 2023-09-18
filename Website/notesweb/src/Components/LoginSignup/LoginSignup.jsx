import React, { useState } from 'react'
import './LoginSignup.css'
import axios from 'axios'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import pass_icon from '../Assets/password.png'

const LoginSignup = () => {

  const[email,setEmail]=useState('')
  const[password,setpassword]=useState('')

  const [action,setAction] = useState("Login");
  
  function handleSubmit(event){
    event.preventDefault();

    axios.post('')

  }

  return (
    <div className='container'>
    <dev className="header">
      <div className="text">{action}</div>
      <div className="underline"></div>
      
    </dev>
    <form onSubmit={handleSubmit}>
    <div className="inputs">
      {action==="Login"?<div></div>:<div className="input">
        <img src={user_icon} alt="" />
        <input type="text" placeholder='Name'/>
      </div>}
      

      <div className="input">
        <img src={email_icon} alt="" />
        <input type="email" placeholder='email' onChange={e=>setEmail(e.target.value)}/>
      </div>

      <div className="input">
        <img src={pass_icon} alt="" />
        <input type="Password" placeholder='Password'onChange={e=>setpassword(e.target.value)}/>
      </div>
    </div>
    </form>
    {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password <span>Click here</span></div>}
    
    <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"}onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
       
    </div>
  </div>
  

  )
}

export default LoginSignup