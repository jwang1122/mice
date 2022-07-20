import { Button, Grid } from '@mui/material';
import { useRef } from 'react';
import './AddCage.css';
import addItem from '../lib/create.js';
import Card from '../UI/Card.js';
import Input from '../UI/Input.js';

function AddCage(props) {
    const url = props.url
    const cageidRef = useRef()

    const handleSubmit = (event) => {
        event.preventDefault()
        const cage = {
            cageid: cageidRef.current.value,
        }
        addItem(url + '/cages', cage)
    }

    return (
        <Card className='addMouse'><form onSubmit={handleSubmit}>
            <Grid container direction={"row"} spacing={2}>
                <Grid item><Input label="Cage ID" inputRef={cageidRef} /></Grid>
                <Grid item><Button color="primary" variant="contained" onClick={handleSubmit}>Add Cage</Button></Grid>
            </Grid></form>
        </Card>
    )
}

export default AddCage