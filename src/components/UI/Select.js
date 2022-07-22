import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Dropdown = props => {
    return (
    <FormControl required sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id={"outlined-basic-label"}>{props.label}</InputLabel>
        <Select
            id="outlined-basic"
            variant="outlined"
            {...props} >
            {props.options.map(item => <MenuItem key={item} value={item} >{item}</MenuItem>)}
        </Select>
    </FormControl>
    )
}


export default Dropdown