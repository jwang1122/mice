import { Button, Grid } from '@mui/material';
import { useRef, useState } from 'react';
import './AddMouse.css';
import Card from './UI/Card.js';
import Input from './UI/Input.js';
import Select from './UI/Select.js'

function AddMouse(props) {
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
        props.onAddMouse(mouse)
    }
    const genderHandler = event => setGender(event.target.value)

    let key = 0
    return (
        <Card className='addMouse'><form onSubmit={handleSubmit}>
            <Grid container direction={"row"} spacing={2}>{[
                <Input label="Mouse ID" inputRef={msidRef} />,
                <Select label="Gender" value={gender} onChange={genderHandler} options={['M', 'F']} />,
                <Input label="Geno" inputRef={genoRef} />,
                <Input label="Date of Birth" inputRef={dobRef} />,
                <Input label="Ear" inputRef={earRef} />,
                <Input label="Mom" inputRef={momRef} />,
                <Input label="Dad" inputRef={dadRef} />,
                <Input label="Cage" inputRef={cageRef} />,
                <Input label="Usage" inputRef={usageRef} />,
                <Input label="Date" inputRef={dateRef} />,
                <Input label="Type" inputRef={typeRef} />,
                <Button color="primary" variant="contained" onClick={handleSubmit}>Add Mouse</Button>,
                <Button color="secondary" variant="contained" onClick={props.onCancel}>Cancel</Button>
            ].map(item => { key++; return <Grid item key={key}>{item}</Grid> })}</Grid></form>
        </Card>
    )
}

export default AddMouse