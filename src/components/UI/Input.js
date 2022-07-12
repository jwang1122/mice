import React from "react";
import { TextField } from '@mui/material';

// const Input = (props) => {
//     return (
//         <TextField id="outlined-basic" {...props} variant="outlined" />
//     );
// }

const Input = props => <TextField id="outlined-basic" variant="outlined" {...props} />

export default Input;