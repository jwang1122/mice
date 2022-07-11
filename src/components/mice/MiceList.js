import React from 'react';
import Box from '@mui/material/Box'
import { DataGrid} from '@mui/x-data-grid';
import classes from './MiceList.module.css'

const columns = [
    { field: 'msid', headerName: 'MS ID', width: 100},
    { field: 'gender', headerName: 'Gender', width: 80 },
    { field: 'geno', headerName: 'Geno', width: 50 },
    { field: 'dob', headerName: 'Birth Date', width: 100 },
    { field: 'ear', headerName: 'Ear', width: 70 },
    { field: 'mom', headerName: 'Mom', width: 80 },
    { field: 'dad', headerName: 'Dad', width: 80 },
    { field: 'cage', headerName: 'Cage', width: 80 },
    { field: 'user', headerName: 'User', width: 100 },
    { field: 'date', headerName: 'Date', width: 120 },
    { field: 'type', headerName: 'Type', width: 80 },
];

function MouseList(props) {
    const selectChangeHandler = (id)=>{
        if(id){
            props.onSelectChange(id[0])
        }
    }
    // console.log(props.mice)
    return (
        <Box className={classes.table}>
            <DataGrid
                rows={props.mice}
                columns={columns}
                pageSize={20}
                rowsPerPageOptions={[20]}
                checkboxSelection
                onSelectionModelChange={selectChangeHandler}
                sx={{
                    boxShadow: 2,
                    border: 2,
                    borderColor: 'primary.light',
                    '& .MuiDataGrid-cell:hover': {
                      color: 'primary.main',
                    },
                  }}
            />
        </Box>
    )
}

export default MouseList