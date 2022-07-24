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
            const males = data.mice.filter(mouse=>mouse.gender==='F')
            setMice(males)
        }
    }, [data, loadError])

    const selectChangeHandler = mouse => {
        props.onSelect(mouse)
    }

    return (
        <div className="App">
            <header className="App-header">
                <MiceList items={mice} isPair={true} title="Female Mice List" onSelectChange={selectChangeHandler} />
            </header>
        </div>
    );
}


export default Home;
