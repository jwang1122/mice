import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Dropdown = props => {
    return <Box sx={{ minWidth: 223 }}><FormControl fullWidth><InputLabel id={"outlined-basic-label"}>{props.label}</InputLabel><Select id="outlined-basic" variant="outlined"{...props} >{props.options.map(item => <MenuItem key={item} value={item} >{item}</MenuItem>)}</Select></FormControl></Box>
}


export default Dropdown