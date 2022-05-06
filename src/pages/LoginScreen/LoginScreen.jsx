import { TextField } from '@mui/material'
import Axios  from 'axios';
import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './LoginScreen.scss'



const LoginScreen = () => {

  let navigate = useNavigate();
  const [email,setEmailState] = useState('');
  const [password,setPasswordState] = useState('');
  


  const sendRequest = () => {
    Axios.post('http://localhost:3001/user/login',{
      email:email,password:password}
      ).then((response => {
        if(response.data.message == "Successfully Logged In"){
          alert(response.data.message)
          console.log(response.data);
          navigate('/welcome');
         }
         else{
           console.log(response.data.message);
           alert(response.data.message);
         }
      }))
  }

  const handleSubmit = (e)=>{
      e.preventDefault();
      console.log(email+" "+password);
      sendRequest();
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
              <p>Dont Have an Account?

                <span onClick={()=>  navigate("/signup")}> Sign Up here</span></p>
                
            </div>
         
        </form>

      </div>
      
    </div>
  )
}

export default LoginScreen