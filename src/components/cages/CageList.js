import MUIDataTable from 'mui-datatables';

const columns = [
    { name: 'id', options: { display: false, filter: false } },
    { name: 'cageid', label: 'Cage ID', options: { filter: true, sort:true } },
    { name: 'type', label: 'Type', options: { filter: true, sort:false }},
    { name: 'mouse1id', label: 'Mouse #1', options: { filter: false, sort:false } },
    { name: 'mouse2id', label: 'Mouse #2', options: { filter: false, sort:false } },
    { name: 'mouse3id', label: 'Mouse #3', options: { filter: false, sort:false } },
    { name: 'mouse4id', label: 'Mouse #4', options: { filter: false, sort:false } },
    { name: 'mouse5id', label: 'Mouse #5', options: { filter: false, sort:false }},
    { name: 'count', label: 'Amount', options: { filter: false, sort:true } },
    { name: 'geno_type', label: 'Geno Type', options: { filter: true, sort:false } },
    { name: 'movein1', label: '#1 Move in', options: { filter: false, sort:false } },
    { name: 'movein2', label: '#2 Move in', options: { filter: false, sort:false } },
    { name: 'movein3', label: '#3 Move in', options: { filter: false, sort:false } },
    { name: 'movein4', label: '#4 Move in', options: { filter: false, sort:false } },
    { name: 'movein5', label: '#5 Move in', options: { filter: false, sort:false } },
    { name: 'notes', label: 'Notes', options: { filter: false, sort:false } },
    { name: 'birthdate', label: 'Birthdate', options: { filter: false, sort:false } },
];
const CageList = (props) => {
    const selectChangeHandler = rowData => {
        console.log(rowData)
        props.onSelectChange(rowData[0])
    }
    const options = {
        onRowClick: rowData => selectChangeHandler(rowData)
    };
    return (
        <MUIDataTable
            title={"Cage List"}
            data={props.items}
            columns={columns}
            options={options}
        />
    )
}

export default CageList