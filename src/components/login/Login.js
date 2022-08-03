import React from 'react';
import ReactDOM from 'react-dom'

import classes from './Login.module.css';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import Input from '../UI/Button/Input';
import bcrypt from 'bcryptjs'
// import {useContext} from 'react'
// import AuthContext from './auth-context';

function Backdrop(props) {
  return <div className={classes.backdrop} />
}


const Login = (props) => {
  // const authCtx = useContext(AuthContext);

  const emailInputRef = React.useRef()
  const passwordInputRef = React.useRef()

  const submitHandler = (event) => {
    event.preventDefault()
    const email = emailInputRef.current.value
    const password = passwordInputRef.current.value
    const hashedPassword = bcrypt.hashSync(password, '$2a$10$CwTycUXWue0Thq9StjUM0u') // hash password created previously upon sign up
    // authCtx.onLogin(email, hashedPassword)
    props.onLogin(email, hashedPassword)
  }
 
  return (
    <Card className={classes.modal}>
      <div className = {classes.login}>
      <form onSubmit={submitHandler}>
        <Input id='email' label='E-Mail ' type='email' ref={emailInputRef} />
        <Input id='password' label='Password ' type='password' ref={passwordInputRef} />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} >
            Login
          </Button>
        </div>
      </form>
      </div>
    </Card>
  )
};

function LoginModal(props) {
  return (
      <React.Fragment>
          {ReactDOM.createPortal(<Backdrop />, document.getElementById('backdrop-root'))}
          {ReactDOM.createPortal(<Login  onLogin={props.onLogin}/>, document.getElementById('overlay-root'))}
      </React.Fragment>
  );
}
export default LoginModal;
