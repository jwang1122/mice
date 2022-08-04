// import './App.css';
import { useContext, useEffect, useState } from 'react'
import useFetch from '../hooks/UseFetch.js'
import AuthContext from '../login/auth-context.js';
import ActionList from './ActionList.js'

function Home(props) {
    const [actions, setActions] = useState([])
    const authCtx = useContext(AuthContext);

    const [data, loadError] = useFetch(authCtx.url + '/actions')

    useEffect(() => {
        if (!loadError && data && data.actions.length > 0) {
            setActions(data.actions)
        }
    }, [data, loadError])


    return (
        <div className="App">
            <header className="App-header">
                {data && <ActionList items={actions}/>}
            </header>
        </div>
    );
}


export default Home;
