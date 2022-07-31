import classes from './Home.module.css'
import LoginModal from './Login'
import {useState, useEffect} from 'react'
import {useContext} from 'react'
import AuthContext from './auth-context';

const Home = (props) => {
    const [displayLogin, setDisplayLogin] = useState(false)
    const authCtx = useContext(AuthContext);

    useEffect(()=>{
        setDisplayLogin(props.display)
    }, [props.display])

    const loginHandler = () =>{
        console.log("loginHandler...")
        setDisplayLogin(false)
    }
    let center = classes.center1
    if(displayLogin){
        center = classes.center2
    }
    return (
        <>
            {displayLogin && !authCtx.isLoggedIn && <LoginModal  onLogin={loginHandler}/>}
            <div className = {classes.center}>
                <img src="mice_home.png" alt="mice"/>
            </div>
            <div className={classes.ad}>

                <p>If you are interested in small web application like this one, 
                    please contact us on (832）123-4567. we will do the job as your wish.</p>

            </div></>
    )}

    export default Home