// import './App.css';
import { useEffect, useState } from 'react'
import useFetch from '../hooks/UseFetch.js'
import MiceList from '../mice/MiceList.js'
// import updateItem from '../lib/update.js'

function Home(props) {
    const [mice, setMice] = useState([])

    const url = props.url
    const [data, loadError] = useFetch(url)
    
    useEffect(() => {
        if (!loadError && data && data.mice.length > 0) {
            const males = data.mice.filter(mouse=>mouse.gender==='M')
            setMice(males)
        }
    }, [data, loadError])

    const selectChangeHandler = id => {
        if (id === undefined)
            return
        const mouse = mice.find(mouse => mouse.id === id)
        props.onSelect(mouse)
    }

    return (
        <div className="App">
            <header className="App-header">
                <MiceList items={mice} onSelectChange={selectChangeHandler} />
            </header>
        </div>
    );
}


export default Home;
