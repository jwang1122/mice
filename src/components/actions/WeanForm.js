import {useRef, useState, useEffect} from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import Input from '../UI/Input'
import Dropdown from '../UI/Select'
import classes from './PairList.module.css'
import useFetch from '../hooks/UseFetch'

const WeanForm = (props) => {
    const fromCage = props.fromCage
    const [cageid, setCageid] = useState()
    const countRef = useRef()
    const reasonRef = useRef()
    const [cageids, setCageids] = useState([])
    const url = props.url
    const [data, loadError] = useFetch(url+"/availableCageIds/4")

    useEffect(() => {
        if (!loadError && data && data.cages.length > 0) {
            setCageids(data.cages)
        }
    }, [data, loadError])

    const submitHandler = (event) =>{
        event.preventDefault()
        const data = [
            {
                
                from_cage:fromCage,
                to_cage:cageid,
                count:countRef.current.value,
                reason:reasonRef.current.value,
            },
        ]
        props.onWean(data)
        setCageids(cageids.filter(data=>data!==cageid))
        setCageid('')
    }

    const selectChangeHandler = (event) =>{
        setCageid(event.target.value)
    }
    return (
        <Card>

            <form onSubmit={submitHandler}>
                <Input name="from_cage" label="From Cage" className={classes.input} value={fromCage?fromCage:''} />&nbsp;
                <Dropdown className={classes.select} name="cageID" label="To Cage" value={cageid?cageid:''} options={cageids} onChange={selectChangeHandler}/>&nbsp;
                <Input name="count" label="Mice Count" className={classes.input} inputRef={countRef}/>&nbsp;
                <Input name="reason" label="Reason" className={classes.input2} inputRef={reasonRef}/>
                <Button type="submit" className={classes.input} name='Transfer' />
            </form>
        </Card>
    )
}

export default WeanForm