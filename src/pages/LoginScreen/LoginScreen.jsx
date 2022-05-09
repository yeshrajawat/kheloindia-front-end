import { TextField } from '@mui/material'
import Axios  from 'axios';
import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { authActions } from '../../store';
import './LoginScreen.scss'
Axios.defaults.withCredentials = true;


const LoginScreen = () => {

  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [email,setEmailState] = useState('');
  const [password,setPasswordState] = useState('');
  const isLoggedIn = useSelector(state=> state.isLoggedIn)


  const sendRequest =   () => {
     Axios.post('http://localhost:3001/user/login',{
      email:email,
      password:password
    }).catch(err=>{
        console.log(err);
    }).then(response => {
      dispatch(authActions.login());
      navigate('/user');
      return response.data;
    });
    
  }

  const handleSubmit = (e)=>{
      e.preventDefault();
    const data =  sendRequest();
    console.log(data);

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