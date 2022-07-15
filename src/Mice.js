// import './App.css';
import { useEffect, useState } from 'react'
import useFetch from './components/hooks/UseFetch.js'
import MiceList from './components/Micelist.js'
import MouseDetails from './components/MouseDetails.js'
import updateItem from './components/lib/update.js'
import Filter from './components/Filter.js'

function Home(props) {
    const [mice, setMice] = useState([])
    const [isDetails, setIsDetails] = useState(false)
    const [mouse, setMouse] = useState(null)
    const [filteredGenome, setFilteredGenome] = useState("All")

    const url = props.url
    const [data, loadError, load] = useFetch(url)

    useEffect(() => {
        if (!loadError && data && data.mice.length > 0) {
            setMice(data.mice)
        }
    }, [data, loadError])

    const changeFilterHandler = selectedGenome => {
        setFilteredGenome(selectedGenome)
    }

    const selectChangeHandler = id => {
        if (id === undefined)
            return
        const mouse = mice.find(mouse => mouse.id === id)
        setIsDetails(true)
        setMouse(mouse)
    }

    const updateHandler = mouse => {
        console.log(mouse)
        updateItem(url + '/mice/' + mouse.id, mouse, load)
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

    const filterMice = filteredGenome === "All" ? mice : mice.filter(mouse => mouse.type === filteredGenome)

    return (
        <div className="App">
            <header className="App-header">
                <h1>Mice Management Website</h1>
                <Filter onChangeFilter={changeFilterHandler} />
                {/* <Action items={filterMice} onAddNewMouse={() => setAddNewMouse(true)}onAddBreeding={() => setAddBreeding(true)} onChangeFilter={changeFilterHandler} /> */}
                {isDetails && <MouseDetails mouse={mouse} onUpdate={updateHandler} onCancel={cancelHandler} />}
                <MiceList items={filterMice} onSelectChange={selectChangeHandler} />
            </header>
        </div>
    );
}


export default Home;
