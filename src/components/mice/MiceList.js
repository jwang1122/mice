import MUIDataTable from 'mui-datatables';

const columns = [
    { name: 'id', options: { display: false, filter: false } },
    { name: 'msid', label: 'MS ID', options: { filter: false, sort: true } },
    { name: 'gender', label: 'Gender', options: { filter: true, sort: false } },
    { name: 'geno', label: 'Geno', options: { filter: false, sort: false } },
    { name: 'dob', label: 'Birthdate', options: { filter: false, sort: false } },
    { name: 'ear', label: 'Ear', options: { filter: false, sort: false } },
    { name: 'mom', label: 'Mom', options: { filter: false, sort: false } },
    { name: 'dad', label: 'Dad', options: { filter: false, sort: false } },
    { name: 'cage', label: 'Cage', options: { filter: true, sort: true } },
    { name: 'usage', label: 'Usage', options: { filter: false, sort: false } },
    { name: 'date', label: 'Date', options: { filter: false, sort: false } },
    { name: 'type', label: 'Type', options: { filter: true, sort: true } }];


const MiceList = (props) => {
    const selectChangeHandler = id => {
        props.onSelectChange(id[0])
    }
    const options = {
        // filterType: "checkbox",
        onRowClick: rowData => selectChangeHandler(rowData),
        rowsPerPageOptions:[5,10,20],
        rowsPerPage:5
    };

    return (
        <MUIDataTable
            title={"Mice List"}
            data={props.items}
            columns={columns}
            options={options}
        />
    )
}

export default MiceList