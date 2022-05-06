import { TextField } from '@mui/material'
import React, { useRef, useState } from 'react'
import './SignUpScreen.scss'
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUpScreen = () => {


const navigate = useNavigate();
  const [email,setEmailState] = useState('');
  const [username,setUsernameState] = useState('');
  const [password,setPasswordState] = useState('');
  const [confirmPassword,setConfirmPasswordState] = useState('');
  

    const sendRequest = () => {
      if(password == confirmPassword){

         Axios.post('http://localhost:3001/user/signup', {
            username:username,
            email:email,
            password:password
        }).then((response) => {
          if(response.data.message == "User Created Successfully"){
            alert(response.data.message)
            navigate('/login');
           }
           else{
             console.log(response.data.message);
             alert(response.data.message);
           }
        })

      }
    }

  const handleSubmit = (e)=>{
      e.preventDefault();
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
            onChange={(e) => setUsernameState(e.target.value) }
              id='outlined-basic' label="UserName" variant='outlined' className='input'/>
            <TextField 
            onChange={(e) => setEmailState(e.target.value) }
              id='outlined-basic' label="Email" variant='outlined' className='input'/>
            <TextField
             onChange={(e) => setPasswordState(e.target.value)}
              id='outlined-basic' label="Password" variant='outlined' className='input'/>
              <TextField
             onChange={(e) => setConfirmPasswordState(e.target.value)}
              id='outlined-basic' label="Confirm Password" variant='outlined' className='input'/>

            <div className="button">

              <button onClick={(e) => handleSubmit(e)}>Sign Up</button>
            </div>
            <div className="signup">
              <p>Already have an Account?<span onClick={()=>navigate('/login')}> Login Here</span></p>
            </div>
         
        </form>

      </div>
      
    </div>
  )
}

export default SignUpScreen;