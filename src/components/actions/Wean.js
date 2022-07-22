// import './App.css';
import { useEffect, useState } from 'react'
import useFetch from '../hooks/UseFetch.js'
import CageList from '../cages/CageList.js'
import AddCage from '../cages/AddCage.js'
import WeanForm from './WeanForm'


function Wean(props) {
    const [cages, setCages] = useState([])
    const [fromCage, setFromCage] = useState('')
    const [data, loadError] = useFetch(props.url + '/greeding')

    useEffect(() => {
        if (!loadError && data && data.cages.length > 0) {
            setCages(data.cages)
        }
    }, [data, loadError])


    const selectChangeHandler = cage => {
        console.log(cage)
        setFromCage(cage[1])
    }

    const weanHandler = wean => {
        console.log(wean)
    }

    return (
        <div className="App">
            <header className="App-header">
                <WeanForm url={props.url} fromCage={fromCage} onWean={weanHandler}/>
                <CageList items={cages} onSelectChange={selectChangeHandler} />
                <AddCage url={props.url}/>
            </header>
        </div>
    );
}


export default Wean;
