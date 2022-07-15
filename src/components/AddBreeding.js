import { Button, Grid } from '@mui/material';
import { useRef } from 'react';
import './AddMouse.css';
import Card from './UI/Card.js';
import Input from './UI/Input.js';
import addItem from './lib/create.js'

function AddBreeding(props) {
    const dobRef = useRef()
    const cageRef = useRef()
    const momRef = useRef()
    const dadRef = useRef()
    const bornRef = useRef()
    const handleSubmit = (event) => {
        event.preventDefault()
        const mouse = {
            dob: dobRef.current.value,
            cage: cageRef.current.value,
            mom: momRef.current.value,
            dad: dadRef.current.value,
            born: bornRef.current.value,
            males: 0,
            females: 0,
            deaths: 0,
            notes: "None",
        }
        console.log(mouse)
        addItem(props.url + '/breeding', mouse)
    }
    return (
        <Card className='addMouse'><form onSubmit={handleSubmit}>
            <Grid container direction={"row"} spacing={2}>
                <Grid item>
                    <Input label="Date of Birth" type="date" inputRef={dobRef} style={{ width: 200 }} />
                </Grid>
                <Grid item>
                    <Input label="Cage" inputRef={cageRef} style={{ width: 200 }} />
                </Grid>
                <Grid item>
                    <Input label="Mom" inputRef={momRef} style={{ width: 200 }} />
                </Grid>
                <Grid item>
                    <Input label="Dad" inputRef={dadRef} style={{ width: 200 }} />
                </Grid>
                <Grid item>
                    <Input label="Born" type='number' inputRef={bornRef} style={{ width: 200 }} />
                </Grid>
                <Grid item>
                    <Button color="primary" variant="contained" onClick={handleSubmit}>Add Breeding</Button>
                </Grid>
                <Grid item>
                    <Button color="secondary" variant="contained" onClick={props.onCancel}>Cancel</Button>
                </Grid>
            </Grid>
        </form></Card>
    )
}

export default AddBreeding