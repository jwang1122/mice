import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'Ms_ID', headerName: 'Mouse ID', width: 100 },
    { field: 'gender', headerName: 'Gender', width: 30 },
    { field: 'geno', headerName: 'Geno', width: 30 },
    { field: 'DOB', headerName: 'D.O.B.', width: 120 },
    { field: 'ear', headerName: 'Ear', width: 40 },
    { field: 'mom', headerName: 'Mom', width: 100 },
    { field: 'dad', headerName: 'Dad', width: 100 },
    { field: 'cage', headerName: 'Cage', width: 40 },
    { field: 'user', headerName: 'Usage', width: 100 },
    { field: 'date', headerName: 'Death date', width: 120 },
];

const MiceList = (props) => {

    const selectChangeHandler = id => {
        props.onSelectChange(id[0])
    }

    return (
        // <>
        //     1MICE LIST TEST
        //     {props.items.map((data)=><MouseItem key={data.id} data={data}/>)}
        // </>
        <div style={{ height: 700, width: '100%' }}>
            <DataGrid
                rows={props.items}
                columns={columns}
                pageSize={50}
                rowsPerPageOptions={[50]}
                checkboxSelection
                onSelectionModelChange={selectChangeHandler}
                sx={{
                    boxShadow: 2
                }}
            />
        </div>
    )
}

export default MiceList