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
    { name: 'notes', label: 'Notes', options: { filter: false, sort: false } },
    { name: 'termination', label: 'End Date', options: { filter: false, sort: false } },
    { name: 'type', label: 'Type', options: { filter: true, sort: true } }];


const UsedMiceList = (props) => {
    const options = {
        rowsPerPageOptions:[5,10,20],
        rowsPerPage:10,
    };

    return (
        <MUIDataTable
            title={"Used Mice List"}
            data={props.items}
            columns={columns}
            options={options}
        />
    )
}

export default UsedMiceList