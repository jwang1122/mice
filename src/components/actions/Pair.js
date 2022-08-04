import { useState, useEffect, useContext } from 'react'
import MiceMale from './MiceMale'
import MiceFemale from './MiceFemale'
import PairForm from './PairForm'
import addItem from '../lib/create'
import AuthContext from '../login/auth-context'


const Pair = (props) => {
    const [male, setMale] = useState()
    const [female, setFemale] = useState()
    const authCtx = useContext(AuthContext);

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
        addItem(authCtx.url+'/pairs', data)
    }

    return (
        <>
            <PairForm male={male} female={female} url={authCtx.url} onPair={pairHandler}/>
            <MiceMale url={authCtx.url} onSelect={selectMaleHandler} />
            <MiceFemale url={authCtx.url} onSelect={selectFemaleHandler} />
        </>
    )
}

export default Pair