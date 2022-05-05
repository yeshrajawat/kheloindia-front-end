import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import { useEffect,useState } from 'react'
const Navbar = () => {
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

        <Link className="navItem" to='/login'> 
        Login
        </Link>
                
        
    </div>
  )
}

export default Navbar