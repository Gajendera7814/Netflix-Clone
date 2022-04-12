import React,{ useState, useEffect } from 'react'
import "./css/nav.css";
import firebase from 'firebase';

const Nav = () => {

    const [show,handleShow]= useState(false);

    const transitionNavbar=()=>{
        if(window.scrollY > 100)
        {
            handleShow(true)
        }
        else
        {
            handleShow(false)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",transitionNavbar)

        return ()=>{
            window.removeEventListener("scroll",transitionNavbar)
        }
    },[])
  return (
    <div className={`nav ${show && "nav__black"}`}>
       <div className='nav__content'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt='' className='logo' />
          <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' onClick={()=>firebase.auth().signOut()} alt='' className='nav_avatar'/>
       </div>
    </div>
  )
}

export default Nav;