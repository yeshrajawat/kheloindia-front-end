import { TextField } from '@mui/material'
import React, { useRef, useState } from 'react'
import './LoginScreen.scss'


const LoginScreen = () => {

  const [email,setEmailState] = useState('');
  const [password,setPasswordState] = useState('');
  
  const handleSubmit = (e)=>{
      e.preventDefault();
      console.log(email+" "+password);
  }


  return (
    <div className='loginScreen'>
      <div className="left">
      <img className='logo' src="HTTPS://kheloindia.gov.in/public/dist/img/logo.jpg"/>
        <div className="title_content">
          <h1>Welcome to Khelo India</h1>
          <p>Hum Fit Toh India Fit Initiative.</p>
          </div>
        <form className="form" autoComplete='off' >
         
           
           
            <TextField 
            onChange={(e) => setEmailState(e.target.value) }
              id='outlined-basic' label="Email" variant='outlined' className='input'/>
            <TextField
             onChange={(e) => setPasswordState(e.target.value)}
              id='outlined-basic' label="Password" variant='outlined' className='input'/>

            <div className="button">

              <button onClick={(e) => handleSubmit(e)}>Sign In</button>
            </div>
            <div className="signup">
              <p>Dont Have an Account?<span> Sign Up here</span></p>
            </div>
         
        </form>

      </div>
      
    </div>
  )
}

export default LoginScreen