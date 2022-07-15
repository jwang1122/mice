import { Button, Grid } from "@mui/material"
import { useRef, useState } from 'react'
import './MouseDetails.css'
import Card from './UI/Card'
import Input from './UI/Input'
import Select from './UI/Select'

const MouseDetails = props => {
    const d = props.mouse
    const cageidRef = useRef(d.msid)
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
            id: d.id,
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
        props.onUpdate(mouse)
    }

    return (
        <Card className='addMouse'><form onSubmit={handleSubmit}>
            <Grid container direction={"row"} spacing={2}>
                <Grid item><Input label="Cage ID" defaultValue={d.cageid} inputRef={cageidRef} disabled={true} /></Grid>
                <Grid item><Input label="Type" defaultValue={d.type} inputRef={typeRef} /></Grid>
                <Grid item><Input label="Mouse #1" defaultValue={d.mouse0} inputRef={mouse0Ref} /></Grid>
                <Grid item><Input label="Mouse #2" defaultValue={d.mouse1} inputRef={mouse1Ref} /></Grid>
                <Grid item><Input label="Mouse #3" defaultValue={d.mouse2} inputRef={mouse2Ref} /></Grid>
                <Grid item><Input label="Mouse #4" defaultValue={d.mouse3} inputRef={mouse3Ref} /></Grid>
                <Grid item><Input label="Mouse #5" defaultValue={d.mouse4} inputRef={mouse4Ref} /></Grid>
                <Grid item><Input label="Amount" defaultValue={d.amount} inputRef={amountRef} /></Grid>
                <Grid item><Input label="Usage" defaultValue={d.usage} inputRef={usageRef} /></Grid>
                <Grid item><Input label="Flags" defaultValue={d.flags} inputRef={flagsRef} /></Grid>
                <Grid item><Input label="Notes" defaultValue={d.notes} inputRef={notesRef} /></Grid>
                <Grid item><Button color="primary" variant="contained" onClick={handleSubmit}>Update</Button></Grid>
                <Grid item><Button color="secondary" variant="contained" onClick={props.onCancel}>Cancel</Button></Grid>
            </Grid></form>
        </Card>
    )
}

export default MouseDetails 