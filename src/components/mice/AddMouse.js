import { useRef } from 'react'
import classes from './AddMouse.module.css'
import Card from '../UI/Card.js'
import { Button, TextField, Grid } from '@mui/material';

function AddMouse(props) {
    const msidRef = useRef()
    const genderRef = useRef()
    const genoRef = useRef()
    const bodRef = useRef()
    const earRef = useRef()
    const momRef = useRef()
    const dadRef = useRef()
    const cageRef = useRef()
    const userRef = useRef()
    const dateRef = useRef()
    const typeRef = useRef()

    const handleSubmit = (event) => {
        event.preventDefault()
        const mouse = {
            msid: msidRef.current.value,
            gender: genderRef.current.value,
            geno: genoRef.current.value,
            dob: bodRef.current.value,
            ear: earRef.current.value,
            mom: momRef.current.value,
            dad: dadRef.current.value,
            cage: cageRef.current.value,
            user: userRef.current.value,
            date: dateRef.current.value,
            type: typeRef.current.value,
        }
        props.onAddMouse(mouse)
    }

    return (
        <Card className={classes.addMouse}>
            <form onSubmit={handleSubmit}>
                <Grid container direction={"row"} spacing={2}>
                    <Grid item>
                        <TextField id="outlined-1" variant="outlined" label="Ms ID" inputRef={msidRef} />
                    </Grid>
                    <Grid item>
                        <TextField id="outlined-2" variant="outlined" label="Gender" inputRef={genderRef} />
                    </Grid>
                    <Grid item>
                        <TextField id="outlined-3" variant="outlined" label="Geno" inputRef={genoRef} />
                    </Grid>
                    <Grid item>
                        <TextField id="outlined-4" variant="outlined" label="D.O.B" inputRef={bodRef} />
                    </Grid>
                    <Grid item>
                        <TextField id="outlined-5" variant="outlined" label="Ear" inputRef={earRef} />
                    </Grid>
                    <Grid item>
                        <TextField id="outlined-6" variant="outlined" label="Mom" inputRef={momRef} />
                    </Grid>
                    <Grid item>
                        <TextField id="outlined-7" variant="outlined" label="Dad" inputRef={dadRef} />
                    </Grid>
                    <Grid item>
                        <TextField id="outlined-8" variant="outlined" label="Cage" inputRef={cageRef} />
                    </Grid>
                    <Grid item>
                        <TextField id="outlined-9" variant="outlined" label="User" inputRef={userRef} />
                    </Grid>
                    <Grid item>
                        <TextField id="outlined-10" variant="outlined" label="Date of Death" inputRef={dateRef} />
                    </Grid>
                    <Grid item>
                        <TextField id="outlined-11" variant="outlined" label="Type" inputRef={typeRef} />
                    </Grid>
                    <Grid item>
                        <div className={classes.action}>
                            <Button color="primary" variant="contained" type="submit">Add Mouse</Button>&nbsp;
                            <Button color="primary" variant="contained" type="button" onClick={props.onCancel}>Cancel</Button>
                        </div>
                    </Grid>
                </Grid>
            </form>
        </Card>
    )
}

export default AddMouse