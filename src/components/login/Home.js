import classes from './Home.module.css'

const Home = () => {
    return (
        <>
            <div className = {classes.center}>
                <img src="mice_home.png" alt="mice"/>
            </div>
            <div className={classes.ad}>
                <p>If you are interested in small web application like this one, 
                    please contact us on (832）123-4567. we will do the job as your wish.</p>
            </div>
        </>
    )
}

export default Home