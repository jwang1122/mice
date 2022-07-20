import { useEffect, useState } from 'react'
import useFetch from '../hooks/UseFetch.js'
import MiceList from '../mice/MiceList.js'
import MouseDetails from '../mice/MouseDetails.js'
import updateItem from '../lib/update.js'

function Home(props) {
    const [mice, setMice] = useState([])
    const [isDetails, setIsDetails] = useState(false)
    const [mouse, setMouse] = useState(null)

    const url = props.url
    const [data, loadError, load] = useFetch(url)

    useEffect(() => {
        if (!loadError && data && data.mice.length > 0) {
            const males = data.mice.filter(mouse=>mouse.gender==='F')
            console.log(males)
            setMice(males)
        }
    }, [data, loadError])

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

    return (
        <div className="App">
            <header className="App-header">
                {isDetails && <MouseDetails mouse={mouse} onUpdate={updateHandler} onCancel={cancelHandler} />}
                <MiceList items={mice} onSelectChange={selectChangeHandler} />
            </header>
        </div>
    );
}


export default Home;
