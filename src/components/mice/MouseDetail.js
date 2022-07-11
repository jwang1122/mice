import { useRef } from 'react'
import classes from './AddMouse.module.css'
import Card from '../UI/Card.js'
import { Button, TextField, Grid } from '@mui/material';

function MouseDetail(props) {
    const mouse = props.mouse
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

    const updateHandler = () => {
        const mouse = {
            id:props.mouse.id,
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
        props.onUpdate(mouse)
    }

    return (
        <Card className={classes.addMouse}>
            <form>
                <Grid container direction={"row"} spacing={2}>
                    <Grid item>
                        <TextField id="outlined-1" variant="outlined" label="Ms ID" disabled={true} defaultValue={mouse.msid} inputRef={msidRef} />
                    </Grid>
                    <Grid item>
                        <TextField id="outlined-2" variant="outlined" label="Gender" disabled={true} defaultValue={mouse.gender} inputRef={genderRef} />
                    </Grid>
                    <Grid item>
                        <TextField id="outlined-3" variant="outlined" label="Geno" disabled={true} defaultValue={mouse.geno} inputRef={genoRef} />
                    </Grid>
                    <Grid item>
                        <TextField id="outlined-4" variant="outlined" label="D.O.B" disabled={true} defaultValue={mouse.dob} inputRef={bodRef} />
                    </Grid>
                    <Grid item>
                        <TextField id="outlined-5" variant="outlined" label="Ear" disabled={true} defaultValue={mouse.ear} inputRef={earRef} />
                    </Grid>
                    <Grid item>
                        <TextField id="outlined-6" variant="outlined" label="Mom" disabled={true} defaultValue={mouse.mom} inputRef={momRef} />
                    </Grid>
                    <Grid item>
                        <TextField id="outlined-7" variant="outlined" label="Dad" disabled={true} defaultValue={mouse.dad} inputRef={dadRef} />
                    </Grid>
                    <Grid item>
                        <TextField id="outlined-8" variant="outlined" label="Cage" defaultValue={mouse.cage} inputRef={cageRef} />
                    </Grid>
                    <Grid item>
                        <TextField id="outlined-9" variant="outlined" label="User" defaultValue={mouse.user} inputRef={userRef} />
                    </Grid>
                    <Grid item>
                        <TextField id="outlined-10" variant="outlined" label="Date of Death" defaultValue={mouse.date} inputRef={dateRef} />
                    </Grid>
                    <Grid item>
                        <TextField id="outlined-11" variant="outlined" label="Type" defaultValue={mouse.type} inputRef={typeRef} />
                    </Grid>
                    <Grid item>
                        <div className={classes.action}>
                            <Button color="primary" variant="contained" type="button" onClick={updateHandler}>Update</Button>&nbsp;
                            <Button color="primary" variant="contained" type="button" onClick={props.onCancel}>Cancel</Button>
                        </div>
                    </Grid>
                </Grid>
            </form>
        </Card>
    )
}

export default MouseDetail