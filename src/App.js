// import './App.css';
import { useEffect, useState } from 'react';
import Action from './components/Action.js';
import AddMouse from './components/AddMouse.js';
import useFetch from './components/hooks/UseFetch.js';
import MiceList from './components/Micelist.js';
import MouseDetails from './components/MouseDetails.js';
import addItem from './components/lib/create.js'
import updateItem from './components/lib/update.js'
import ResponsiveAppBar from './components/Nav'

function App() {
    const [mice, setMice] = useState([])
    const [addNewMouse, setAddNewMouse] = useState(false)
    const [isDetails, setIsDetails] = useState(false)
    const [mouse, setMouse] = useState(null)
    const [filteredGenome, setFilteredGenome] = useState("ASM")

    const [data, loadError, load] = useFetch('http://192.168.3.19:5000')

    useEffect(() => {
        if (data && data.mice.length > 0) {
            setMice(data.mice)
        }
    }, [data])

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
        updateItem('http://192.168.3.19:5000/mice/' + mouse.id, mouse, load)
        setIsDetails(false)
    }

    const cancelHandler = () => {
        setIsDetails(false)
    }

    const addMouseHandler = mouse => {
        addItem('http://192.168.3.19:5000/mice', mouse, load)
    }

    const filterMice = filteredGenome === "All" ? mice : mice.filter(mouse => mouse.type === filteredGenome)

    return (
        <div className="App">
            <ResponsiveAppBar/>
            <header className="App-header">
                <h1>Mice Management Website</h1>
                <Action items={filterMice} onAddNewMouse={() => setAddNewMouse(true)} onChangeFilter={changeFilterHandler} />
                {addNewMouse && <AddMouse onAddMouse={addMouseHandler} onCancel={() => setAddNewMouse(false)} />}
                {isDetails && <MouseDetails mouse={mouse} onUpdate={updateHandler} onCancel={cancelHandler} />}
                <MiceList items={filterMice} onSelectChange={selectChangeHandler} />
            </header>
        </div>
    );
}


export default App;
