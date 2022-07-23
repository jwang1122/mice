// import './App.css';
import { useEffect, useState } from 'react'
import useFetch from '../hooks/UseFetch.js'
import MiceList from '../mice/MiceList.js'
import TransferForm from './TransferForm'
import updateItem from '../lib/update'

function Transfer(props) {
    const [mice, setMice] = useState([])
    const [mouse, setMouse] = useState(null)

    const url = props.url
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
        updateItem(url + '/transfer/' + mouse.id, transfer)
    }

    return (
        <div className="App">
            <header className="App-header">
                <TransferForm mouse={mouse} url={props.url} onTransfer={transferHandler}/>
                <MiceList items={mice} onSelectChange={selectChangeHandler} />
            </header>
        </div>
    );
}


export default Transfer;
