import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { auth } from '../../firebase';
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
 } from 'firebase/auth';

import './Login.styles.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
    .then((auth) => {
      navigate('/');
    }).catch((error) => {
      alert(error.message);
    })
  }

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        // console.log(auth);
        if(auth) {
          navigate('/');
        }
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  return (
    <div className="login">
      <Link to='/'>
        <img 
          className='login__logo'
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
          alt="" 
        />
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>

        <form action="#">
          <h5>E-mail</h5>
          <input 
            type="text" 
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input 
            type="password" 
            onChange={e => setPassword(e.target.value)}
          />

          <button 
            className='login__signInButton'
            type='button'
            onClick={signIn}
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the Amazon Fake Clone
          conditions of use & Sale. Please see our Privacy 
          Notice, our Cookies Notice and our Interest-Based
          Ads Notice.
        </p>

        <button 
          className='login__registerButton'
          type='button'
          onClick={register}
        >
          Create your Amazon Account
        </button>
      </div>
    </div>
  )
}

export default Login;