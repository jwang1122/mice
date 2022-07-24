// import './App.css';
import { useEffect, useState } from 'react'
import useFetch from '../hooks/UseFetch.js'
import CageList from '../cages/CageList.js'
import AddCage from '../cages/AddCage.js'
import WeanForm from './WeanForm'
import addItem from '../lib/create'


function Wean(props) {
    const [cages, setCages] = useState([])
    const [selectedCage, setSelectedCage] = useState()
    const [data, loadError] = useFetch(props.url + '/greeding')

    useEffect(() => {
        if (!loadError && data && data.cages.length > 0) {
            setCages(data.cages)
        }
    }, [data, loadError])


    const selectChangeHandler = cage => {
        setSelectedCage(cage)
    }

    const weanHandler = wean => {
        addItem(props.url + "/wean", wean)
    }

    return (
        <div className="App">
            <header className="App-header">
                <WeanForm url={props.url} selectedCage={selectedCage} onWean={weanHandler}/>
                <CageList items={cages} onSelectChange={selectChangeHandler} />
                <AddCage url={props.url}/>
            </header>
        </div>
    );
}


export default Wean;
