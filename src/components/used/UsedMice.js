// import './App.css';
import { useContext, useEffect, useState } from 'react'
import useFetch from '../hooks/UseFetch.js'
import AuthContext from '../login/auth-context.js';
import UsedMiceList from './UsedMiceList.js'

function Home(props) {
    const [mice, setMice] = useState([])
    const authCtx = useContext(AuthContext);

    const url = authCtx.url
    const [data, loadError] = useFetch(url + "/used")

    useEffect(() => {
        if (!loadError && data && data.mice.length > 0) {
            setMice(data.mice)
        }
    }, [data, loadError])

     return (
        <div className="App">
            <header className="App-header">
                <UsedMiceList items={mice} />
            </header>
        </div>
    );
}


export default Home;
