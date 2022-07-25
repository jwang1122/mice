import { Button, Grid } from "@mui/material"
import { useRef, useState } from 'react'
import './MouseDetails.css'
import Card from '../UI/Card'
import Input from '../UI/Input'
import Select from '../UI/Select'

const MouseDetails = props => {
    const mouse = props.mouse
    const msidRef = useRef(mouse.msid)
    const [gender, setGender] = useState(mouse.gender)
    const genoRef = useRef()
    const dobRef = useRef()
    const earRef = useRef()
    const momRef = useRef()
    const dadRef = useRef()
    const cageRef = useRef()
    const usageRef = useRef()
    const dateRef = useRef()
    const typeRef = useRef()
    const handleSubmit = (event) => {
        event.preventDefault()
        const updatedMouse = {
            id: mouse.id,
            msid: msidRef.current.value,
            gender: gender,
            geno: genoRef.current.value,
            dob: dobRef.current.value,
            ear: earRef.current.value,
            mom: momRef.current.value,
            dad: dadRef.current.value,
            cage: cageRef.current.value,
            usage: usageRef.current.value,
            date: dateRef.current.value,
            type: typeRef.current.value,
        }
        props.onUpdate(updatedMouse)
    }
    const handleGender = event => {
        setGender(event.target.value)
    }
    return (
        <Card className='addMouse'><form onSubmit={handleSubmit}>
            <Grid container direction={"row"} spacing={2}>
                <Grid item><Input label="Mouse ID" defaultValue={mouse.msid} inputRef={msidRef} disabled={true} /></Grid>
                <Grid item><Select label="Gender" value={gender} onChange={handleGender} options={['M', 'F']} /></Grid>
                <Grid item><Input label="Geno" defaultValue={mouse.geno} inputRef={genoRef} /></Grid>
                <Grid item><Input label="Date of Birth" defaultValue={mouse.dob} inputRef={dobRef} disabled={true} /></Grid>
                <Grid item><Input label="Ear" defaultValue={mouse.ear} inputRef={earRef} /></Grid>
                <Grid item><Input label="Mom" defaultValue={mouse.mom} inputRef={momRef} disabled={true} /></Grid>
                <Grid item><Input label="Dad" defaultValue={mouse.dad} inputRef={dadRef} disabled={true} /></Grid>
                <Grid item><Input label="Cage" defaultValue={mouse.cage} inputRef={cageRef} /></Grid>
                <Grid item><Input label="Usage" defaultValue={mouse.usage} inputRef={usageRef} /></Grid>
                <Grid item><Input label="Date" defaultValue={mouse.date} inputRef={dateRef} /></Grid>
                <Grid item><Input label="Type" defaultValue={mouse.type} inputRef={typeRef} /></Grid>
                <Grid item><Button color="primary" variant="contained" onClick={handleSubmit}>Update</Button></Grid>
                <Grid item><Button color="secondary" variant="contained" onClick={props.onCancel}>Cancel</Button></Grid>
            </Grid></form>
        </Card>
    )
}

export default MouseDetails 