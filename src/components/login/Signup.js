import React, { useState } from 'react';

import classes from './Login.module.css';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import Input from '../UI/Button/Input';
import addItem from '../lib/create'
import bcrypt from 'bcryptjs'
import { useNavigate } from 'react-router-dom'

const Signup = (props) => {
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
            const hashedPassword = bcrypt.hashSync(password, '$2a$10$CwTycUXWue0Thq9StjUM0u') 
            const user = {
                email: email,
                password: hashedPassword,
                status: 'inactive',
                date: new Date(),
                type: 'view'
            }
            addItem(props.url + '/user', user)
            navigate("/home")
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
