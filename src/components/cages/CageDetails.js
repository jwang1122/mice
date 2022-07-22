import { Button, Grid } from "@mui/material"
import { useRef} from 'react'
import './CageDetails.css'
import Card from '../UI/Card'
import Input from '../UI/Input'

const MouseDetails = props => {
    const d = props.cage
    console.log(d)
    const cageidRef = useRef(d.cageid)
    const typeRef = useRef()
    const mouse1Ref = useRef()
    const mouse2Ref = useRef()
    const mouse3Ref = useRef()
    const mouse4Ref = useRef()
    const mouse5Ref = useRef()
    const amountRef = useRef()
    const genotypeRef = useRef()
    const movein1Ref = useRef()
    const movein2Ref = useRef()
    const movein3Ref = useRef()
    const movein4Ref = useRef()
    const movein5Ref = useRef()
    const notesRef = useRef()
    const birthdateRef = useRef()

    const handleSubmit = (event) => {
        event.preventDefault()
        const cage = {
            id: d.id,
            cageid: cageidRef.current.value,
            type: typeRef.current.value,
            mouse1id: mouse1Ref.current.value,
            mouse2id: mouse2Ref.current.value,
            mouse3id: mouse3Ref.current.value,
            mouse4id: mouse4Ref.current.value,
            mouse5id: mouse5Ref.current.value,
            count: amountRef.current.value,
            genotype: genotypeRef.current.value,
            movein1: movein1Ref.current.value,
            movein2: movein2Ref.current.value,
            movein3: movein3Ref.current.value,
            movein4: movein4Ref.current.value,
            movein5: movein5Ref.current.value,
            notes: notesRef.current.value,
            birthdate: birthdateRef.current.value,
        }
        props.onUpdate(cage)
    }

    return (
        <Card className='addMouse'><form onSubmit={handleSubmit}>
            <Grid container direction={"row"} spacing={2}>
                <Grid item><Input label="Cage ID" defaultValue={d.cageid} inputRef={cageidRef} disabled={true} /></Grid>
                <Grid item><Input label="Type" defaultValue={d.type} inputRef={typeRef} /></Grid>
                <Grid item><Input label="Mouse #1" defaultValue={d.mouse1id} inputRef={mouse1Ref} /></Grid>
                <Grid item><Input label="Mouse #2" defaultValue={d.mouse2id} inputRef={mouse2Ref} /></Grid>
                <Grid item><Input label="Mouse #3" defaultValue={d.mouse3id} inputRef={mouse3Ref} /></Grid>
                <Grid item><Input label="Mouse #4" defaultValue={d.mouse4id} inputRef={mouse4Ref} /></Grid>
                <Grid item><Input label="Mouse #5" defaultValue={d.mouse5id} inputRef={mouse5Ref} /></Grid>
                <Grid item><Input label="Amount" defaultValue={d.count} inputRef={amountRef} /></Grid>
                <Grid item><Input label="Geno Type" defaultValue={d.geno_type} inputRef={genotypeRef} /></Grid>
                <Grid item><Input label="movein1" defaultValue={d.movein1} inputRef={movein1Ref} /></Grid>
                <Grid item><Input label="movein1" defaultValue={d.movein2} inputRef={movein2Ref} /></Grid>
                <Grid item><Input label="movein1" defaultValue={d.movein3} inputRef={movein3Ref} /></Grid>
                <Grid item><Input label="movein1" defaultValue={d.movein4} inputRef={movein4Ref} /></Grid>
                <Grid item><Input label="movein1" defaultValue={d.movein5} inputRef={movein5Ref} /></Grid>
                <Grid item><Input label="Notes" defaultValue={d.notes} inputRef={notesRef} /></Grid>
                <Grid item><Input label="Birthdate" defaultValue={d.birthdate} inputRef={birthdateRef} /></Grid>
                <Grid item><Button color="primary" variant="contained" onClick={handleSubmit}>Update</Button></Grid>
                <Grid item><Button color="secondary" variant="contained" onClick={props.onCancel}>Cancel</Button></Grid>
            </Grid></form>
        </Card>
    )
}

export default MouseDetails 