import { Button, Grid } from '@mui/material';
import { useRef, useState } from 'react';
import './AddMouse.css';
import Card from './UI/Card.js';
import Input from './UI/Input.js';
import Select from './UI/Select.js'

function AddMouse(props) {
    const dobRef = useRef()
    const cageRef = useRef()
    const momRef = useRef()
    const dadRef = useRef()
    const malesRef = useRef()
    const femalesRef = useRef()
    const deathsRef = useRef()
    const startidRef = useRef()
    const notesRef = useRef()
    const handleSubmit = (event) => {
        event.preventDefault()
        const mouse = {
            dob: dobRef.current.value,
            cage: cageRef.current.value,
            mom: momRef.current.value,
            dad: dadRef.current.value,
            males: malesRef.current.value,
            females: femalesRef.current.value,
            deaths: deathsRef.current.value,
            startid: startidRef.current.value,
            notes: notesRef.current.value,
        }
        props.onAddBreeding(mouse)
    }

    return (
        <Card className='addMouse'><form onSubmit={handleSubmit}>
            <Grid container direction={"row"} spacing={2}>{[
                <Input label="Date of Birth" type="date"inputRef={dobRef} />,
                <Input label="Cage" inputRef={cageRef} />,
                <Input label="Mom" inputRef={momRef} />,
                <Input label="Dad" inputRef={dadRef} />,
                <Input label="Males" type="number" inputRef={malesRef} />,
                <Input label="Females" type="number" inputRef={femalesRef} />,
                <Input label="Deaths" type="number" inputRef={deathsRef} />,
                <Input label="Start ID" inputRef={startidRef} />,
                <Input label="Notes" inputRef={notesRef} />,
                <Button color="primary" variant="contained" onClick={handleSubmit}>Add Breeding</Button>,
                <Button color="secondary" variant="contained" onClick={props.onCancel}>Cancel</Button>
            ].map(item => <Grid item>{item}</Grid>)}</Grid></form>
        </Card>
    )
}

export default AddMouse