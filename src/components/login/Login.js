import React from 'react';

import classes from './Login.module.css';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import Input from '../UI/Button/Input';
import bcrypt from 'bcryptjs'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
  const navigate = useNavigate();

  const emailInputRef = React.useRef()
  const passwordInputRef = React.useRef()

  const submitHandler = (event) => {
    event.preventDefault()
    const email = emailInputRef.current.value
    const password = passwordInputRef.current.value
    const hashedPassword = bcrypt.hashSync(password, '$2a$10$CwTycUXWue0Thq9StjUM0u') // hash password created previously upon sign up
    const storedEmail = localStorage.getItem("email")
    const storedPassword = localStorage.getItem("password")
    if(email===storedEmail && hashedPassword===storedPassword){
      localStorage.setItem("isLoggedIn", 1)
    }else{
      localStorage.setItem("isLoggedIn", 0)
    }
    navigate("/home")
  }
 
  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input id='email' label='E-Mail' type='email' ref={emailInputRef} />
        <Input id='password' label='Password' type='password' ref={passwordInputRef} />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} >
            Login
          </Button>
        </div>
      </form>
    </Card>
  )
};

export default Login;
