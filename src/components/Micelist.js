import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'msid', headerName: 'Mouse ID' },
    { field: 'gender', headerName: 'Gender' },
    { field: 'geno', headerName: 'Geno' },
    { field: 'dob', headerName: 'D.O.B.' },
    { field: 'ear', headerName: 'Ear', },
    { field: 'mom', headerName: 'Mom', },
    { field: 'dad', headerName: 'Dad' },
    { field: 'cage', headerName: 'Cage', },
    { field: 'usage', headerName: 'Usage' },
    { field: 'date', headerName: 'Death date' },
];
const MiceList = (props) => {
    const selectChangeHandler = id => {
        props.onSelectChange(id[0])
    }
    return (
        <div style={{width:'auto'}}>
            <DataGrid
                rows={props.items}
                columns={columns}
                rowsPerPageOptions={[10, 25, 50, 100, 500]}
                checkboxSelection
                onSelectionModelChange={selectChangeHandler}
                autoHeight={true}
                sx={{
                    boxShadow: 2
                }}
            />
        </div>
    )
}

export default MiceList