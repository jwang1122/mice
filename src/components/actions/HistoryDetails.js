import { Button, Grid } from "@mui/material"
import { useRef } from 'react'
import classes from '../mice/MouseDetails.module.css'
import Card from '../UI/Card'
import Input from '../UI/Input'

const MouseDetails = props => {
    const mouse = props.mouse
    const birthdateRef = useRef()
    const femalesRef = useRef()
    const malesRef = useRef()
    const plusplusRef = useRef()
    const plusminusRef = useRef()
    const minusminusRef = useRef()
    const notesRef = useRef()
    const birthsRef = useRef()
    const deathsRef = useRef()
    const typeRef = useRef()
    const handleSubmit = (event) => {
        event.preventDefault()
        const updatedMouse = {
            id: mouse[0],
            birthdate: birthdateRef.current.value,
            females: femalesRef.current.value,
            males: malesRef.current.value,
            notes: notesRef.current.value,
            plusplus: plusplusRef.current.value,
            plusminus: plusminusRef.current.value,
            minusminus: minusminusRef.current.value,
            born: birthsRef.current.value,
            deaths: deathsRef.current.value,
            type: typeRef.current.value,
        }
        props.onUpdate(updatedMouse)
    }
    return (
        <Card className={classes.addMouse}><form onSubmit={handleSubmit}>
            <Grid container direction={"row"} spacing={2}>
                <Grid item><Input label="Birthdate" defaultValue={mouse[1]} inputRef={birthdateRef} /></Grid>
                <Grid item><Input label="Cage" defaultValue={mouse[2]} disabled={true} /></Grid>
                <Grid item><Input label="Mom" defaultValue={mouse[3]} disabled={true} /></Grid>
                <Grid item><Input label="Dad" defaultValue={mouse[4]} disabled={true} /></Grid>
                <Grid item><Input label="Males" defaultValue={mouse[5]} inputRef={malesRef} /></Grid>
                <Grid item><Input label="Females" defaultValue={mouse[6]} inputRef={femalesRef} /></Grid>
                <Grid item><Input label="Notes" defaultValue={mouse[7]} inputRef={notesRef} /></Grid>
                <Grid item><Input label="+/+" defaultValue={mouse[8]} inputRef={plusplusRef} /></Grid>
                <Grid item><Input label="+/-" defaultValue={mouse[9]} inputRef={plusminusRef} /></Grid>
                <Grid item><Input label="-/-" defaultValue={mouse[10]} inputRef={minusminusRef} /></Grid>
                <Grid item><Input label="Births" defaultValue={mouse[11]} inputRef={birthsRef} /></Grid>
                <Grid item><Input label="Deaths" defaultValue={mouse[12]} inputRef={deathsRef} /></Grid>
                <Grid item><Input label="Type" defaultValue={mouse[13]} inputRef={typeRef} /></Grid>
                <Grid item><Button color="primary" variant="contained" onClick={handleSubmit}>Update</Button></Grid>
                <Grid item><Button color="secondary" variant="contained" onClick={props.onCancel}>Cancel</Button></Grid>
            </Grid></form>
        </Card>
    )
}

export default MouseDetails 