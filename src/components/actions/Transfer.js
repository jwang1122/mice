// import './App.css';
import { useContext, useEffect, useState } from 'react'
import useFetch from '../hooks/UseFetch.js'
import MiceList from '../mice/MiceList.js'
import TransferForm from './TransferForm'
import updateItem from '../lib/update'
import AuthContext from '../login/auth-context.js'

function Transfer(props) {
    const [mice, setMice] = useState([])
    const [mouse, setMouse] = useState(null)
    const authCtx = useContext(AuthContext);

    const url = authCtx.url
    const [data, loadError] = useFetch(url)

    useEffect(() => {
        if (!loadError && data && data.mice.length > 0) {
            setMice(data.mice)
        }
    }, [data, loadError])

    const selectChangeHandler = mouse => {
        setMouse(mouse)
    }

    const transferHandler = transfer => {
        console.log(transfer)
        updateItem(url + '/transfer/' + transfer.id, transfer)
    }

    return (
        <div className="App">
            <header className="App-header">
                <TransferForm mouse={mouse} url={authCtx.url} onTransfer={transferHandler}/>
                <MiceList items={mice} title="Mice List" onSelectChange={selectChangeHandler} />
            </header>
        </div>
    );
}


export default Transfer;
