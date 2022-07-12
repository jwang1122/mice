import { Button, Grid } from "@mui/material"
import { useRef, useState } from 'react'
import './MouseDetails.css'
import Card from './UI/Card'
import Input from './UI/Input'
import Select from './UI/Select'

const MouseDetails = props => {
    const d = props.mouse
    const msidRef = useRef(d.Ms_ID)
    const [gender, setGender] = useState(d.gender)
    const genoRef = useRef()
    const dobRef = useRef()
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
            id: d.id,
            Ms_ID: msidRef.current.value,
            gender: gender,
            geno: genoRef.current.value,
            DOB: dobRef.current.value,
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
    const handleGender = event => {
        setGender(event.target.value)
    }
    return (
        <Card className='addMouse'><form onSubmit={handleSubmit}>
            <Grid container direction={"row"} spacing={2}>{[
                <Input label="Mouse ID" defaultValue={d.Ms_ID} inputRef={msidRef} />,
                <Select label="Gender" value={gender} onChange={handleGender} options={['M', 'F', 'N/A']} />,
                <Input label="Geno" defaultValue={d.geno} inputRef={genoRef} />,
                <Input label="Date of Birth" defaultValue={d.DOB} inputRef={dobRef} />,
                <Input label="Ear" defaultValue={d.ear} inputRef={earRef} />,
                <Input label="Mom" defaultValue={d.mom} inputRef={momRef} />,
                <Input label="Dad" defaultValue={d.dad} inputRef={dadRef} />,
                <Input label="Cage" defaultValue={d.cage} inputRef={cageRef} />,
                <Input label="User" defaultValue={d.user} inputRef={userRef} />,
                <Input label="Date" defaultValue={d.date} inputRef={dateRef} />,
                <Input label="Type" defaultValue={d.type} inputRef={typeRef} />,
                <Button color="primary" variant="contained" onClick={handleSubmit}>Update</Button>,
                <Button color="secondary" variant="contained" onClick={props.onCancel}>Cancel</Button>
            ].map(item => <Grid item>{item}</Grid>)}</Grid></form>
        </Card>
    )
}

export default MouseDetails 