import React from 'react'
import './Navbar.scss'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Axios  from 'axios'
import { authActions } from '../../store'
import axios from 'axios'
axios.defaults.withCredentials = true;
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state=> state.isLoggedIn);
  const sendLogoutReq = ()=>{
    Axios.post('http://localhost:3001/user/logout', null, {
      withCredentials:true
    }).then(response => {
      if(response.status == 200){
        dispatch(authActions.logout());
        navigate('/login');
      }
      return new Error("Unable to Logout. Please try again.")
    })
  }

  const [show, handleShow] = useState(false);

  const transitionNavBar = ()=>{
    if(window.scrollY > 100){
        handleShow(true);
    }
    else{
        handleShow(false);
    }
};


useEffect( () => {

    window.addEventListener('scroll',transitionNavBar);
    return () => window.removeEventListener('scroll',transitionNavBar); 
},[]);



  return (
    <div className={`nav ${show && "nav__black"}`} >
        <Link className="navItem" to='/'>
        Home
        </Link>

        <Link className="navItem" to='/games'> 
        Games
        </Link>

        <Link className="navItem" to='/pledge'> 
        Pledge
        </Link>

        <Link className="navItem" to='/aboutkl'> 
        About Khelo India
        </Link>

        <Link className="navItem" to='/tenders'> 
        Tenders
        </Link>

       {!isLoggedIn && ( <Link className="navItem" to='/login'> 
        Login
        </Link>)}

        {isLoggedIn && (<Link onClick={() => sendLogoutReq()} className="navItem" to='/'> 
        Logout
        </Link>)}
                
        
    </div>
  )
}

export default Navbar