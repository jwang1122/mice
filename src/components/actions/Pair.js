import { useState, useEffect } from 'react'
import MiceMale from './MiceMale'
import MiceFemale from './MiceFemale'
import PairList from './PairList'
import addItem from '../lib/create'


const Pair = (props) => {
    const [male, setMale] = useState()
    const [female, setFemale] = useState()

    const selectMaleHandler = (mouse) => {
        setMale(mouse)
    }

    const selectFemaleHandler = (mouse) => {
        setFemale(mouse)
    }

    useEffect(() => {
        // if (male) console.log(male)
    }, [male])

    useEffect(() => {
        // if (female) console.log(female)
    }, [female])

    const pairHandler = (data) => {
        addItem(props.url+'/actions', data[0])
        addItem(props.url+'/actions', data[1])
    }

    return (
        <>
            <PairList male={male} female={female} url={props.url} onPair={pairHandler}/>
            <MiceMale url={props.url} onSelect={selectMaleHandler} />
            <MiceFemale url={props.url} onSelect={selectFemaleHandler} />
        </>
    )
}

export default Pair