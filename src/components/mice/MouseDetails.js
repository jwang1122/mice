import { Button, Grid } from "@mui/material"
import { useRef, useState } from 'react'
import './MouseDetails.css'
import Card from '../UI/Card'
import Input from '../UI/Input'
import Dropdown from '../UI/Select'

const MouseDetails = props => {
    const mouse = props.mouse
    const msidRef = useRef()
    const [gender, setGender] = useState(mouse[2])
    const genoRef = useRef()
    const dobRef = useRef()
    const earRef = useRef()
    const momRef = useRef()
    const dadRef = useRef()
    const cageRef = useRef()
    const usageRef = useRef()
    const dateRef = useRef()
    const typeRef = useRef()
    const groupRef = useRef()

    const handleSubmit = (event) => {
        event.preventDefault()
        const updatedMouse = {
            id: mouse[0],
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
            group: groupRef.current.value,
        }
        props.onUpdate(updatedMouse)
    }
    const handleGender = event => {
        setGender(event.target.value)
    }

    const genders = ['M', 'F']
    return (
        <Card className='addMouse'><form onSubmit={handleSubmit}>
            <Grid container direction={"row"} spacing={2}>
                <Grid item><Input label="Mouse ID" defaultValue={mouse[1]} inputRef={msidRef} disabled={true} /></Grid>
                <Grid item><Dropdown name="gender" label="Gender" value={mouse[2]} options={genders} onChange={handleGender}/></Grid>
                <Grid item><Input label="Geno" defaultValue={mouse[3]} inputRef={genoRef} /></Grid>
                <Grid item><Input label="Date of Birth" defaultValue={mouse[4]} inputRef={dobRef} disabled={true} /></Grid>
                <Grid item><Input label="Ear" defaultValue={mouse[5]} inputRef={earRef} /></Grid>
                <Grid item><Input label="Mom" defaultValue={mouse[6]} inputRef={momRef} disabled={true} /></Grid>
                <Grid item><Input label="Dad" defaultValue={mouse[7]} inputRef={dadRef} disabled={true} /></Grid>
                <Grid item><Input label="Cage" defaultValue={mouse[8]} inputRef={cageRef} disabled={true}  /></Grid>
                <Grid item><Input label="Usage" defaultValue={mouse[9]} inputRef={usageRef} /></Grid>
                <Grid item><Input label="Date" defaultValue={mouse[10]} inputRef={dateRef} /></Grid>
                <Grid item><Input label="Type" defaultValue={mouse[11]} inputRef={typeRef} /></Grid>
                <Grid item><Input label="Group" defaultValue={mouse[12]} inputRef={groupRef} /></Grid>
                <Grid item><Button color="primary" variant="contained" onClick={handleSubmit}>Update</Button></Grid>
                <Grid item><Button color="secondary" variant="contained" onClick={props.onCancel}>Cancel</Button></Grid>
            </Grid></form>
        </Card>
    )
}

export default MouseDetails 