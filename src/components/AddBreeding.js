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
    const handleSubmit = (event) => {
        event.preventDefault()
        const mouse = {
            dob: dobRef.current.value,
            cage: cageRef.current.value,
            mom: momRef.current.value,
            dad: dadRef.current.value,
            born: 0,
            males: 0,
            females: 0,
            deaths: 0,
            startid: null,
            notes: "None",
        }
        props.onAddBreeding(mouse)
    }

    return (
        <Card className='addMouse'><form onSubmit={handleSubmit}>
            <Grid container direction={"row"} spacing={2}>{[
                <Input label="Date of Birth" type="date" inputRef={dobRef} style={{ width: 200 }} />,
                <Input label="Cage" inputRef={cageRef} style={{ width: 200 }} />,
                <Input label="Mom" inputRef={momRef} style={{ width: 200 }} />,
                <Input label="Dad" inputRef={dadRef} style={{ width: 200 }} />,
                <Button color="primary" variant="contained" onClick={handleSubmit}>Add Breeding</Button>,
                <Button color="secondary" variant="contained" onClick={props.onCancel}>Cancel</Button>
            ].map(item => <Grid item>{item}</Grid>)}</Grid>
        </form></Card>
    )
}

export default AddMouse