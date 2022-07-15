// import './App.css';
import { useEffect, useState } from 'react'
import useFetch from './components/hooks/UseFetch.js'
import CageList from './components/CageList.js'
import CageDetails from './components/CageDetails.js'
import updateItem from './components/lib/update.js'
import Filter from './components/Filter.js'

function Home(props) {
    const dummy_cages = [
        { id: 'A', cageid: '69', type: 'ASM', mouse0: '1234', mouse1: '5678', mouse2: null, mouse3: null, mouse4: null, amount: 2, usage: 'breeding', flags: null, notes: 'THEY NO PRODUCE BABIES' },
        { id: 'B', cageid: '42', type: 'Nlrp3', mouse0: '1111', mouse1: '2222', mouse2: '3333', mouse3: '4444', mouse4: null, amount: 4, usage: 'nothing', flags: 'fought', notes: 'yee' }
    ]
    const [cages, setCages] = useState(dummy_cages)
    const [isDetails, setIsDetails] = useState(false)
    const [mouse, setMouse] = useState(null)
    const [filteredGenome, setFilteredGenome] = useState("All")

    // const [data, loadError, load] = useFetch(props.url)

    // useEffect(() => {
    //     if (!loadError && data && data.mice.length > 0) {
    //         setCages(data.mice)
    //     }
    // }, [data, loadError])

    const changeFilterHandler = selectedGenome => {
        setFilteredGenome(selectedGenome)
    }

    const selectChangeHandler = id => {
        if (id === undefined)
            return
        const mouse = cages.find(mouse => mouse.id === id)
        setIsDetails(true)
        setMouse(mouse)
    }

    const updateHandler = mouse => {
        console.log(mouse)
        updateItem(props.url + '/mice/' + mouse.id, mouse, null)
        setIsDetails(false)
    }

    const cancelHandler = () => {
        setIsDetails(false)
    }

    // const addMouseHandler = mouse => {
    //     addItem(url + '/mice', mouse, load)
    // }

    // const addBreedingHandler = breeding => {
    //     addItem(url + '/breeding', breeding, () => { })
    //     console.log(breeding)
    // }

    const filterMice = filteredGenome === "All" ? cages : cages.filter(mouse => mouse.type === filteredGenome)

    return (
        <div className="App">
            <header className="App-header">
                <h1>Mice Management Website</h1>
                <Filter onChangeFilter={changeFilterHandler} />
                {/* <Action items={filterMice} onAddNewMouse={() => setAddNewMouse(true)}onAddBreeding={() => setAddBreeding(true)} onChangeFilter={changeFilterHandler} /> */}
                {isDetails && <CageDetails mouse={mouse} onUpdate={updateHandler} onCancel={cancelHandler} />}
                <CageList items={filterMice} onSelectChange={selectChangeHandler} />
            </header>
        </div>
    );
}


export default Home;
