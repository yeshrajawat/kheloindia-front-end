import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Welcome.scss';
Axios.defaults.withCredentials = true
const Welcome = () => {

    const[username,setUsername] = useState("");
    const[_id,setUser_id] = useState("");
    const[email,setEmail] = useState("");
    const sendRequest = () => {
        Axios.get('http://localhost:3001/user/',{
            withCredentials:true
        }).then(response=> {
            setEmail(response.data.user.email);
            setUsername(response.data.user.username);
            setUser_id(response.data.user._id);
        })
    }
    useEffect(()=> {
        sendRequest();
    },[]);


  return (
    <div className='welcome'>
        {username}
    </div>
  )
}

export default Welcome;