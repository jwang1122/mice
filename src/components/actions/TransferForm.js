import {useRef, useState, useEffect} from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import Input from '../UI/Input'
import Dropdown from '../UI/Select'
import classes from './PairList.module.css'
import useFetch from '../hooks/UseFetch'

const TransferForm = (props) => {
    const mouse = props.mouse
    let msid = ''
    if(mouse){
        msid = mouse[1]
    }
    const [cageid, setCageid] = useState()
    const notesRef = useRef()
    const reasonRef = useRef()
    const [cageids, setCageids] = useState([])
    const url = props.url
    const [data, loadError] = useFetch(url+"/availableCageIds/4")

    useEffect(() => {
        if (!loadError && data && data.cages.length > 0) {
            setCageids(data.cages) // set available cages
        }
    }, [data, loadError])

    const submitHandler = (event) =>{
        event.preventDefault()
        const data = 
            {
                id:mouse[0],
                from_cage:mouse[1],
                to_cage:cageid[0],
                notes:notesRef.current.value,
                reason:reasonRef.current.value,
            }
        
        props.onTransfer(data)
        setCageid('')
    }

    const selectChangeHandler = (event) =>{
        setCageid(event.target.value)
    }

    
    return (
        <Card>

            <form onSubmit={submitHandler}>
                <Input name="msid" label="Mouse ID" className={classes.input} value={msid} />&nbsp;
                <Dropdown className={classes.dropdown} name="cageID" label="To Cage" value={cageid?cageid:''} options={cageids} onChange={selectChangeHandler}/>&nbsp;
                <Input name="notes" label="Notes" className={classes.input} inputRef={notesRef}/>&nbsp;
                <Input name="reason" label="Reason" className={classes.input} inputRef={reasonRef}/>
                <Button type="submit" className={classes.input} name='Transfer' />
            </form>
        </Card>
    )
}

export default TransferForm