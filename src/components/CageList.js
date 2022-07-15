import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'cageid', headerName: 'Cage ID' },
    { field: 'type', headerName: 'Type' },
    { field: 'mouse0', headerName: 'Mouse #1' },
    { field: 'mouse1', headerName: 'Mouse #2' },
    { field: 'mouse2', headerName: 'Mouse #3' },
    { field: 'mouse3', headerName: 'Mouse #4', },
    { field: 'mouse4', headerName: 'Mouse #5', },
    { field: 'amount', headerName: 'Amount' },
    { field: 'usage', headerName: 'Usage' },
    { field: 'flags', headerName: 'Flags' },
    { field: 'notes', headerName: 'Notes' }
];
const CageList = (props) => {
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

export default CageList