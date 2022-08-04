// import './App.css';
import { useContext, useEffect, useState } from 'react'
import useFetch from '../hooks/UseFetch.js'
import HistoryList from './HistoryList.js'
import HistoryDetails from './HistoryDetails.js'
import updateItem from '../lib/update.js'
import AuthContext from '../login/auth-context.js'

function Home(props) {
    const [mice, setMice] = useState([])
    const [isDetails, setIsDetails] = useState(false)
    const [mouse, setMouse] = useState(null)
    const authCtx = useContext(AuthContext);

    const url = authCtx.url
    const [data, loadError, load] = useFetch(url + "/borns")

    useEffect(() => {
        if (!loadError && data && data.borns.length > 0) {
            setMice(data.borns)
        }
    }, [data, loadError])

    const selectChangeHandler = mouse => {
        console.log(mouse)
        setIsDetails(true)
        setMouse(mouse)
    }

    const updateHandler = mouse => {
        updateItem(url + '/borns/' + mouse.id, mouse, load)
        setIsDetails(false)
    }

    const cancelHandler = () => {
        setIsDetails(false)
    }

    return (
        <div className="App">
            <header className="App-header">
                {isDetails && <HistoryDetails mouse={mouse} onUpdate={updateHandler} onCancel={cancelHandler} />}
                <HistoryList items={mice} title="Born History List" url={authCtx.url} needGroup={true} onSelectChange={selectChangeHandler} />
            </header>
        </div>
    );
}


export default Home;
