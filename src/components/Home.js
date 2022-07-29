import MainHeader from './MainHeader'
import classes from './Home.module.css'

const Home = () => {
    const title = "Mice Management"
    let isLoggedIn= false
    const loggedIn = localStorage.getItem("isLoggedIn")

    if(loggedIn==="1"){
        console.log("set logged in to be true.")
        isLoggedIn = true
    }
    const logoutHandler = () => {
        console.log("logout...")
    }

    console.log(isLoggedIn)
    return (
        <>
            <MainHeader title={title} isLoggedIn={isLoggedIn} onLogout={logoutHandler} />
            <div className={classes.center}>
                <img src='micecages.jpg' alt='cages' width='1024' />
            </div>
            <div className = {classes.center}>
                <img src="mice.png" alt="mice" width='1024' />
            </div>
        </>
    )
}

export default Home
