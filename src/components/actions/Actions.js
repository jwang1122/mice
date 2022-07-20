// import './App.css';
import { useEffect, useState } from 'react'
import useFetch from '../hooks/UseFetch.js'
import ActionList from './ActionList.js'
import CageDetails from '../cages/CageDetails.js'
import updateItem from '../lib/update.js'

function Home(props) {
    const [cages, setCages] = useState([])
    const [isDetails, setIsDetails] = useState(false)
    const [cage, setCage] = useState(null)

    const [data, loadError] = useFetch(props.url + '/cages')

    useEffect(() => {
        if (!loadError && data && data.cages.length > 0) {
            setCages(data.cages)
        }
    }, [data, loadError])


    const selectChangeHandler = id => {
        if (id === undefined)
            return
        const cage = cages.find(cage => cage.id === id)
        setIsDetails(true)
        setCage(cage)
    }

    const updateHandler = cage => {
        console.log(cage)
        updateItem(props.url + '/mice/' + cage.id, cage, null)
        setIsDetails(false)
    }

    const cancelHandler = () => {
        setIsDetails(false)
    }

    return (
        <div className="App">
            <header className="App-header">
                {isDetails && <CageDetails cage={cage} onUpdate={updateHandler} onCancel={cancelHandler} />}
                <ActionList items={cages} onSelectChange={selectChangeHandler} />
            </header>
        </div>
    );
}


export default Home;
