// import './App.css';
import { useEffect, useState } from 'react'
import useFetch from './components/hooks/UseFetch.js'
import CageList from './components/CageList.js'
import CageDetails from './components/CageDetails.js'
import updateItem from './components/lib/update.js'

function Home(props) {
    // const dummy_cages = [
    //     { id: 'A', cageid: '69', type: 'ASM', mouse0: '1234', mouse1: '5678', mouse2: null, mouse3: null, mouse4: null, amount: 2, usage: 'breeding', flags: null, notes: 'THEY NO PRODUCE BABIES' },
    //     { id: 'B', cageid: '42', type: 'Nlrp3', mouse0: '1111', mouse1: '2222', mouse2: '3333', mouse3: '4444', mouse4: null, amount: 4, usage: 'nothing', flags: 'fought', notes: 'yee' }
    // ]
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
                <h1>Mice Management Website</h1>
                {isDetails && <CageDetails cage={cage} onUpdate={updateHandler} onCancel={cancelHandler} />}
                <CageList items={cages} onSelectChange={selectChangeHandler} />
            </header>
        </div>
    );
}


export default Home;
