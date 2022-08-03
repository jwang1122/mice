import { Button, Grid } from "@mui/material"
import { useRef } from 'react'
import Card from '../UI/Card'
import Input from '../UI/Input'
import classes from '../mice/MouseDetails.module.css'

const UserDetails = props => {
    const user = props.user
    // const emailRef = useRef()
    // const passwordRef = useRef()
    const statusRef = useRef()
    // const dateRef = useRef()
    const typeRef = useRef()
    const handleSubmit = (event) => {
        event.preventDefault()
        const updatedMouse = {
            id: user[0],
            status: statusRef.current.value,
            type: typeRef.current.value,
        }
        props.onUpdate(updatedMouse)
    }
    return (
        <Card className={classes.addMouse}><form onSubmit={handleSubmit}>
            <Grid container direction={"row"} spacing={2}>
                <Grid item><Input label="Email" defaultValue={user[1]} disabled={true} /></Grid>
                <Grid item><Input label="Password" defaultValue={user[2]} disabled={true} /></Grid>
                <Grid item><Input label="Status" defaultValue={user[3]} inputRef={statusRef} /></Grid>
                <Grid item><Input label="Date" type="date" defaultValue={user[4]} disabled={true} /></Grid>
                <Grid item><Input label="Type" defaultValue={user[5]} inputRef={typeRef} /></Grid>
                <Grid item><Button color="primary" variant="contained" onClick={handleSubmit}>Update</Button></Grid>
                <Grid item><Button color="secondary" variant="contained" onClick={props.onCancel}>Cancel</Button></Grid>
            </Grid></form>
        </Card>
    )
}

export default UserDetails 