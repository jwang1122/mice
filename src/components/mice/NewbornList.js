

const NewbornList = () => {
    const columns = [
        { field: 'DOB', headerName: 'D.O.B.', width: 120 },
        { field: 'mom', headerName: 'Mom', width: 100 },
        { field: 'dad', headerName: 'Dad', width: 100 },
        { field: 'males', headerName: 'M', width: 30 },
        { field: 'females', headerName: 'F', width: 30 },
        { field: 'plusplus', headerName: '+/+', width: 30 },
        { field: 'plusminus', headerName: '+/-', width: 30 },
        { field: 'minusminus', headerName: '-/-', width: 40 },
        { field: 'births', headerName: 'Births', width: 100 },
        { field: 'deaths', headerName: 'Deaths', width: 120 },
        { field: 'notes', headerName: 'Notes', width: 100 },
    ];

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={props.items}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}

export default NewbornList