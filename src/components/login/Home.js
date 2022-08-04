import classes from './Home.module.css'
import LoginModal from './Login'
import { useState, useEffect, useContext } from 'react'
import AuthContext from './auth-context';
import useFetch from '../hooks/UseFetch'
import { useNavigate } from 'react-router-dom'

const Home = (props) => {
    const navigate = useNavigate();
    const [displayLogin, setDisplayLogin] = useState(false)
    const authCtx = useContext(AuthContext);

    const [data] = useFetch(authCtx.url + "/users")
    if (data && data.users) {
        authCtx.users = data.users
    }

    useEffect(() => {
        setDisplayLogin(props.display)
    }, [props.display])

    const loginHandler = (email, password) => {
        console.log(email)
        console.log(password)
        console.log(authCtx.users)
        authCtx.users.forEach(user => {
            if (email === user.email &&
                password === user.password &&
                user.status === 'active' &&
                user.type === 'admin') {
                authCtx.isAdmin = true
                navigate("/admin")
            }
            if (email === user.email &&
                password === user.password &&
                user.status === 'active' ){
                authCtx.onLogin(true)
                navigate("/")
            }
        });

        // setDisplayLogin(false)
    }
    return (
        <>
            {displayLogin && !authCtx.isLoggedIn && <LoginModal onLogin={loginHandler} />}
            <div className={classes.center}>
                <img src="mice_home.png" alt="mice" />
            </div>
            <div className={classes.ad}>

                <p>If you are interested in small web application like this one,
                    please contact us on (832) 123-4567. we will do the job as your wish.</p>

            </div></>
    )
}

export default Home