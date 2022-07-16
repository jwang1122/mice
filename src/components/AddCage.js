import { Button, Grid } from '@mui/material';
import { useRef } from 'react';
import './AddMouse.css';
import addItem from './lib/create.js';
import Card from './UI/Card.js';
import Input from './UI/Input.js';

function AddCage(props) {
    const url = props.url
    const cageidRef = useRef()
    const typeRef = useRef()
    const mouse0Ref = useRef()
    const mouse1Ref = useRef()
    const mouse2Ref = useRef()
    const mouse3Ref = useRef()
    const mouse4Ref = useRef()
    const amountRef = useRef()
    const usageRef = useRef()
    const flagsRef = useRef()
    const notesRef = useRef()
    const handleSubmit = (event) => {
        event.preventDefault()
        const mouse = {
            cageid: cageidRef.current.value,
            type: typeRef.current.value,
            mouse0: mouse0Ref.current.value,
            mouse1: mouse1Ref.current.value,
            mouse2: mouse2Ref.current.value,
            mouse3: mouse3Ref.current.value,
            mouse4: mouse4Ref.current.value,
            amount: amountRef.current.value,
            usage: usageRef.current.value,
            flags: flagsRef.current.value,
            notes: notesRef.current.value,
        }
        addItem(url + '/cages', mouse)
    }

    return (
        <Card className='addMouse'><form onSubmit={handleSubmit}>
            <Grid container direction={"row"} spacing={2}>
                <Grid item><Input label="Cage ID" inputRef={cageidRef} /></Grid>
                <Grid item><Input label="Type" inputRef={typeRef} /></Grid>
                <Grid item><Input label="Mouse #1" inputRef={mouse0Ref} /></Grid>
                <Grid item><Input label="Mouse #2" inputRef={mouse1Ref} /></Grid>
                <Grid item><Input label="Mouse #3" inputRef={mouse2Ref} /></Grid>
                <Grid item><Input label="Mouse #4" inputRef={mouse3Ref} /></Grid>
                <Grid item><Input label="Mouse #5" inputRef={mouse4Ref} /></Grid>
                <Grid item><Input label="Amount" inputRef={amountRef} /></Grid>
                <Grid item><Input label="Usage" inputRef={usageRef} /></Grid>
                <Grid item><Input label="Flags" inputRef={flagsRef} /></Grid>
                <Grid item><Input label="Notes" inputRef={notesRef} /></Grid>
                <Grid item><Button color="primary" variant="contained" onClick={handleSubmit}>Add Cage</Button></Grid>
            </Grid></form>
        </Card>
    )
}

export default AddCage