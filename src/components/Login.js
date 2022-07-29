import React from 'react';

import Card from './UI/Card.js';
import classes from './Login.module.css';
import Button from './UI/Button.js';
import Input from './UI/Input.js';

const Login = (props) => {
  const emailInputRef = React.useRef();
  const passwordInputRef = React.useRef();

  const submitHandler = (event) =>{
    event.preventDefault()
    const email = emailInputRef.current.value
    const password = passwordInputRef.current.value
    props.onLogin(email, password)
  }
  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input id='email' label='E-Mail' type='email' ref={emailInputRef}/>
        <Input id='password' label='Password' type='password' ref={passwordInputRef}/>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
