import MUIDataTable from 'mui-datatables';

const columns = [
    // { name: 'id', options: { display: false, filter: false } },
    { name: 'cageid', label: 'Cage ID', options: { filter: false, sort: true } },
    { name: 'birthdate', label: 'Birthdate', options: { filter: true, sort: true } },
    { name: 'daysleft', label: 'Date Left', options: { filter: false, sort: true } },
];
const CageList = (props) => {
    const today = new Date()
    const filtered = props.items.filter(
        item => item.birthdate && item.birthdate.trim().length > 0)
    const cages = filtered.map(item => [{
        'cageid': item.cageid,
        'birthdate': item.birthdate,
        'daysleft': Math.ceil(22 - ((today - new Date(item?.birthdate)) / (1000 * 60 * 60 * 24))) + " days left."
    }][0])
    console.log(cages)
    const selectChangeHandler = rowData => {
        props.onSelectChange(rowData)
    }
    const options = {
        onRowClick: rowData => selectChangeHandler(rowData)
    };
    return (
        <MUIDataTable
            title={"Breeding Reminders"}
            data={cages}
            columns={columns}
            options={options}
        />
    )
}

export default CageList