import React from 'react';

import classes from './Login.module.css';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import Input from '../UI/Button/Input';
import bcrypt from 'bcryptjs'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
  const navigate = useNavigate();
  
  const emailInputRef = React.useRef();
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
  );
};

export default Login;
