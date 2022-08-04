import {useState,useEffect, useContext} from 'react'
import useFetch from '../hooks/UseFetch.js'
import AuthContext from '../login/auth-context.js'
import BreedingReminderList from './BreedingReminderList'

const BreedingReminder = (props) => {
    const [mice, setMice] = useState([])
    const authCtx = useContext(AuthContext);

    const url = authCtx.url
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
                <BreedingReminderList items={mice} title="Male Mice List" onSelectChange={selectChangeHandler} />
            </header>
        </div>
    );
}

export default BreedingReminder