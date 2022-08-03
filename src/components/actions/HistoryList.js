import MUIDataTable from 'mui-datatables';

const columns = [
    { name: 'id', options: { display: false, filter: false } },
    { name: 'birthdate', label: 'Birthdate', options: { filter: false, sort: false } },
    { name: 'cage', label: 'Cage', options: { filter: true, sort: true } },
    { name: 'mom', label: 'Mom', options: { filter: false, sort: false } },
    { name: 'dad', label: 'Dad', options: { filter: false, sort: false } },
    { name: 'males', label: 'M', options: { filter: false, sort: true } },
    { name: 'females', label: 'F', options: { filter: true, sort: false } },
    { name: 'notes', label: 'Notes', options: { filter: false, sort: false } },
    { name: 'plusplus', label: '+/+', options: { filter: false, sort: false } },
    { name: 'plusminus', label: '+/-', options: { filter: false, sort: false } },
    { name: 'minusminus', label: '-/-', options: { filter: false, sort: false } },
    { name: 'born', label: 'Births', options: { filter: true, sort: true } },
    { name: 'deaths', label: 'Deaths', options: { filter: true, sort: false } },
    { name: 'type', label: 'Type', options: { filter: true, sort: false } }];


function HistoryList(props) {
    const selectChangeHandler = row => {
        props.onSelectChange(row);
    };

    const options = {
        // filterType: "checkbox",
        onRowClick: rowData => selectChangeHandler(rowData),
        rowsPerPageOptions: [10, 30, 100],
        rowsPerPage: 30,
        // onRowSelectionChange: (current, allRows, rows) => rowSelectHandler(current, allRows, rows),
        customToolbarSelect: rows => { }, // get rid of trash can 
    };

    return (
        <>
            <MUIDataTable
                title={props.title}
                data={props.items}
                columns={columns}
                options={options} />
        </>
    );
}


export default HistoryList