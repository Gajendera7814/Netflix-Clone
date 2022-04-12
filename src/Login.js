import React, { useState } from 'react'
import "./css/Login.css";
import SignUp from './SignUp';

const Login = () => {

  const [signIn,SetSignIn]=useState(false);

  const showSignUp=(e)=>{
    e.preventDefault();
    SetSignIn(true);
  }

  return (
    <div className='login'>
      <div className='login__header'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" className='login__logo' alt='' />

        <button className='login__button'>
          Sign In
        </button>
      </div>

      <div className='login__body'>
      {
        signIn ? (<SignUp />) : (
         <>
          <h1>Unlimited films, TV programmes and more.</h1>
          <h2>Watch Anywhere,Cancel at any time.</h2>
          <h3>Ready to watch? Enter your email or restart your membership.</h3>

          <form className='login__form'  onClick={showSignUp}>
            <input type="text" placeholder='Email Address' />
            <button >Get Started</button>
          </form>
         </>
        )
      }
      </div>
    <div className='login__gradient'></div>
  </div>
  )
};
export default Login;