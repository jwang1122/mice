import React, { useState } from 'react';

import Card from '../UI/Card';
import classes from './Login.module.css';
import Button from '../UI/Button';
import Input from '../UI/Input';
import bcrypt from 'bcryptjs'
import MainHeader from './MainHeader';
import { useNavigate } from 'react-router-dom'

const Signup = (props) => {
    const title = "Mice Management"
    const isLoggedIn = props.isLoggedIn
    const navigate = useNavigate();

    const validEmailRegex = RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
    var validPasswordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const emailChangeHandler = event => {
        const value = event.target.value
        setEmail(value)
        setEmailError(validEmailRegex.test(value) ? '' : 'Email is not valid!')
    }
    const passwordChangeHandler = event => {
        const value = event.target.value
        setPassword(value)
        setPasswordError(value.match(validPasswordRegex) ? '' : 'Password must between (6, 16) with at least 1 number, and 1 special character.')
    }

    const submitHandler = event => {
        event.preventDefault()

        if (emailError.length === 0 && passwordError.length === 0) {
            localStorage.setItem('email', email)
            const hashedPassword = bcrypt.hashSync(password, '$2a$10$CwTycUXWue0Thq9StjUM0u') 
            localStorage.setItem('password', hashedPassword)
            // props.onSignup(email, hashedPassword)
            navigate("/home")
        }
        setEmail("")
        setPassword("")
    }

    return (
        <Card className={classes.login}>
            <MainHeader title={title} isLoggedIn={isLoggedIn} />
            <form onSubmit={submitHandler} >
                <Input label='E-Mail' type='email' onChange={emailChangeHandler} />
                {emailError.length > 0 && <span className={classes.error}>{emailError}</span>}
                <Input label='Password' type='password' onChange={passwordChangeHandler} />
                {passwordError.length > 0 && <span className={classes.error}>{passwordError}</span>}                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn} >Signup</Button>
                </div>
            </form>
        </Card>
    );
};

export default Signup;
