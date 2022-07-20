import MiceMale from './MiceMale'
import MiceFemale from './MiceFemale'
import PairList from './PairList'

const Pair = (props) => {
    const male = 'A0185'
    const female = 'A0188'
    return (
        <>
        <PairList male={male} female={female}/>
        <MiceMale url={props.url}/>
        <MiceFemale url={props.url}/>
        </>
    )
}

export default Pair