import { Button } from '@mui/material';
import Filter from './Filter.js';
import Search from './Search.js';
import Card from "./UI/Card";


const Action = (props) => {
    return (
        <Card>
            <Button color="primary" variant="contained" onClick={props.onAddNewMouse}>Add New Mouse</Button>&nbsp;&nbsp;&nbsp;
            {/* <Button color="secondary" variant="contained" onClick={props.onAddNewMouse}>Show Newborn</Button>&nbsp;&nbsp;&nbsp;
            <Button color="secondary" variant="contained" onClick={props.onAddNewMouse}>Show Experimental</Button> */}
            <Filter onChangeFilter={props.onChangeFilter} />
            <Search items={props.items} />
        </Card>
    )
}

export default Action