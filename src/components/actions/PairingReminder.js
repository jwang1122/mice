import {useState,useEffect} from 'react'
import useFetch from '../hooks/UseFetch.js'
import PairingReminderList from './PairingReminderList'
// import classes from './BreedingReminder.module.css'

const PairingReminder = (props) => {
    const [mice, setMice] = useState([])

    const url = props.url
    const [data, loadError] = useFetch(url+'/greeding')
    
    useEffect(() => {
        if (!loadError && data && data.cages.length > 0) {
            setMice(data.cages)
        }
    }, [data, loadError])

    const selectChangeHandler = mouse => {
        props.onSelect(mouse)
    }

    return (
        <div className="App">
            <header className="App-header">
                <PairingReminderList items={mice} title="Male Mice List" onSelectChange={selectChangeHandler} />
            </header>
        </div>
    );
}

export default PairingReminder