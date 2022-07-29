import React, { useState } from 'react';

import Card from './UI/Card';
import classes from './Login.module.css';
import Button from './UI/Button';
import Input from './UI/Input';
import bcrypt from 'bcryptjs'

const Signup = (props) => {
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
            const hashedPassword = bcrypt.hashSync(password, '$2a$10$CwTycUXWue0Thq9StjUM0u') // hash created previously created upon sign up
            localStorage.setItem('password', password)
            props.onSignup(email, hashedPassword)
        }
        setEmail("")
        setPassword("")
}


    return (
        <Card className={classes.login}>
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
