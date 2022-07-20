// import './App.css';
import { useEffect, useState } from 'react'
import useFetch from '../hooks/UseFetch.js'
import ActionList from './ActionList.js'

function Home(props) {
    const [actions, setActions] = useState([])

    const [data, loadError] = useFetch(props.url + '/actions')

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
