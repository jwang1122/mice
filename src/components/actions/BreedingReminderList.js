import MUIDataTable from 'mui-datatables';

const columns = [
    // { name: 'id', options: { display: false, filter: false } },
    { name: 'cageid', label: 'Cage ID', options: { filter: false, sort: true } },
    { name: 'movein', label: 'asdfasdf', options: { filter: false, sort: true } },
    { name: 'movein2', label: 'Date Left', options: { filter: false, sort: true } },
];
const CageList = (props) => {
    const today = new Date()
    const day = new Date(props.items[1]?.movein2)
    console.log(today)
    console.log(day)
    console.log(((today - day) / (1000 * 60 * 60 * 24)))
    const cages = props.items.map(item => [{
        'cageid': item.cageid,
        'movein': item.movein2,
        'movein2': Math.ceil(22 - ((today - day) / (1000 * 60 * 60 * 24)))+" days left."
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
            title={"Cage List"}
            data={cages}
            columns={columns}
            options={options}
        />
    )
}

export default CageList