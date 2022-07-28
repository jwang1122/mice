import MUIDataTable from 'mui-datatables';

const columns = [
    // { name: 'id', options: { display: false, filter: false } },
    { name: 'cageid', label: 'Cage ID', options: { filter: false, sort: true } },
    { name: 'movein', label: 'Move in Date', options: { filter: false, sort: true } },
    { name: 'movein2', label: 'Date Left', options: { filter: false, sort: true } },
];
const PairingReminderList = (props) => {
    const today = new Date()
    const filtered = props.items.filter(
        item => item.movein2 && item.movein2.trim().length > 0)
    const cages = filtered.map(item => [{
        'cageid': item.cageid,
        'movein': item.movein2,
        'movein2': Math.ceil(22 - ((today - new Date(item?.movein2)) / (1000 * 60 * 60 * 24)))+" days left."
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
            title={"Pairing Reminders"}
            data={cages}
            columns={columns}
            options={options}
        />
    )
}

export default PairingReminderList