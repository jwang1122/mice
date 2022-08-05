// import './App.css';
import { useContext, useEffect, useState } from 'react'
import useFetch from '../hooks/UseFetch.js'
import MiceList from './MiceList.js'
import MouseDetails from './MouseDetails.js'
import updateItem from '../lib/update.js'
import AuthContext from '../login/auth-context.js'

function Home(props) {
    const [mice, setMice] = useState([])
    const [isDetails, setIsDetails] = useState(false)
    const [mouse, setMouse] = useState(null)
    const authCtx = useContext(AuthContext);

    const [data, loadError, load] = useFetch(authCtx.url)

    useEffect(() => {
        if (!loadError && data && data.mice.length > 0) {
            setMice(data.mice)
        }
    }, [data, loadError])

    const selectChangeHandler = mouse => {
        console.log(mouse)
        setIsDetails(true)
        setMouse(mouse)
    }

    const updateHandler = mouse => {
        updateItem(authCtx.url + '/mice/' + mouse.id, mouse, load)
        setIsDetails(false)
    }

    const cancelHandler = () => {
        setIsDetails(false)
    }

    return (
        <div className="App">
            <header className="App-header">
                {isDetails && <MouseDetails mouse={mouse} onUpdate={updateHandler} onCancel={cancelHandler} />}
                <MiceList items={mice} title="Mice List" url={authCtx.url} needGroup={true} onSelectChange={selectChangeHandler} />
            </header>
        </div>
    );
}


export default Home;
