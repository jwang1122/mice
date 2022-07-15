import { Button, Grid } from '@mui/material';
import { useRef, useState } from 'react';
import './AddMouse.css';
import Card from './UI/Card.js';
import Input from './UI/Input.js';
import Select from './UI/Select.js'
import addItem from './lib/create.js'

function AddMouse(props) {
    const url = props.url
    const msidRef = useRef()
    const [gender, setGender] = useState('M')
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
        const mouse = {
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
        addItem(url+'/mice', mouse)
    }
    const genderHandler = event => setGender(event.target.value)

    return (
        <Card className='addMouse'><form onSubmit={handleSubmit}>
            <Grid container direction={"row"} spacing={2}>
                <Grid item><Input label="Mouse ID" inputRef={msidRef} /></Grid>
                <Grid item><Select label="Gender" value={gender} onChange={genderHandler} options={['M', 'F']} /></Grid>
                <Grid item><Input label="Geno" inputRef={genoRef} /></Grid>
                <Grid item><Input label="Date of Birth" inputRef={dobRef} /></Grid>
                <Grid item><Input label="Ear" inputRef={earRef} /></Grid>
                <Grid item><Input label="Mom" inputRef={momRef} /></Grid>
                <Grid item><Input label="Dad" inputRef={dadRef} /></Grid>
                <Grid item><Input label="Cage" inputRef={cageRef} /></Grid>
                <Grid item><Input label="Usage" inputRef={usageRef} /></Grid>
                <Grid item><Input label="Date" inputRef={dateRef} /></Grid>
                <Grid item><Input label="Type" inputRef={typeRef} /></Grid>
                <Grid item></Grid><Button color="primary" variant="contained" onClick={handleSubmit}>Add Mouse</Button>,
            </Grid></form>
        </Card>
    )
}

export default AddMouse