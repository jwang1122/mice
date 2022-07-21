import {useRef, useState, useEffect} from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import Input from '../UI/Input'
import Dropdown from '../UI/Select'
import classes from './PairList.module.css'
import useFetch from '../hooks/UseFetch'

const PairList = (props) => {
    const male = props.male
    const female  = props.female
    const [cageid, setCageid] = useState()
    const reasonRef = useRef()
    const [cageids, setCageids] = useState([])
    const url = props.url
    const [data, loadError] = useFetch(url+"/availableCageIds/0")

    useEffect(() => {
        if (!loadError && data && data.cages.length > 0) {
            setCageids(data.cages)
        }
    }, [data, loadError])

    const submitHandler = (event) =>{
        event.preventDefault()
        const data = [
            {
                id:male.id,
                msid:male.msid,
                from_cage:male.cage,
                to_cage:cageid,
                gender:male.gender,
                reason:reasonRef.current.value,
            },
            {
                id:female.id,
                msid:female.msid,
                from_cage:female.cage,
                to_cage:cageid,
                gender:female.gender,
                reason:reasonRef.current.value,
            }
        ]
        props.onPair(data)
        setCageids(cageids.filter(data=>data!=cageid))
        setCageid('')
    }

    const selectChangeHandler = (event) =>{
        setCageid(event.target.value)
    }
    return (
        <Card>

            <form onSubmit={submitHandler}>
                <Input name="maleID" label="Male Mouse ID" className={classes.input} value={male?male.msid:''}  />&nbsp;
                <Input name="femaleID" label="Female Mouse ID"  className={classes.input} value={female?female.msid:''} />&nbsp;
                <Dropdown className={classes.select} name="cageID" label="Cage ID" value={cageid?cageid:''} options={cageids} onChange={selectChangeHandler}/>&nbsp;
                <Input name="reason" label="Reason" className={classes.input2} inputRef={reasonRef}/>
                <Button type="submit" className={classes.input} name='OK' />
            </form>
        </Card>
    )
}

export default PairList