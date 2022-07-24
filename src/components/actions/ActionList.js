import MUIDataTable from 'mui-datatables';

const columns = [
    { name: 'id', options: { display: false, filter: false } },
    { name: 'date', label: 'Date', options: { filter: true, sort:true } },
    { name: 'msid', label: 'Mouse ID', options: { filter: false, sort:true }},
    { name: 'from_cage', label: 'From', options: { filter: true, sort:true } },
    { name: 'to_cage', label: 'To', options: { filter: true, sort:true } },
    { name: 'gender', label: 'Gender', options: { filter: false, sort:false } },
    { name: 'tail', label: 'tail', options: { filter: false, sort:false } },
    { name: 'reason', label: 'Reason', options: { filter: true, sort:false }},
    { name: 'notes', label: 'Notes', options: { filter: false, sort:false } },
    { name: 'executed_by', label: 'Executed By', options: { filter: true, sort:false } },
];
const ActionList = (props) => {
    return (
        <MUIDataTable
            title={"Action List"}
            data={props.items}
            columns={columns}
        />
    )
}

export default ActionList