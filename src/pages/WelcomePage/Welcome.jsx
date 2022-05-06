import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Welcome.scss';
Axios.defaults.withCredentials = true
const Welcome = () => {

    const[user,setUser] = useState({
        _id:"",
        username:"",
        email:"",
    });
    const sendRequest = () => {
        Axios.get('http://localhost:3001/user/',{
            withCredentials:true
        }).then(response=> {
            console.log(response.data.user);
            user.email = response.data.user.email;
            user.username = response.data.user.username;
            user._id = response.data.user._id;
        })
    }
    useEffect(()=> {
        sendRequest();
    },[]);


  return (
      
    <div>
        <h1>{user.username}</h1>
    </div>
  )
}

export default Welcome