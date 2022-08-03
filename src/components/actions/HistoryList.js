import MUIDataTable from 'mui-datatables';
import Input from '../UI/Input'
import Button from '../UI/Button'
import Card from '../UI/Card'
import { useState, useRef } from 'react'
import updateItem from '../lib/update'
import addItem from '../lib/create'

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


const MiceList = (props) => {
    const [ids, setIds] = useState([])
    const groupNameRef = useRef()
    const selectChangeHandler = mouse => {
        props.onSelectChange(mouse)
    }

    const rowSelectHandler = (current, allRows, rows) => {
        setIds(rows)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        console.log(event.target.value)
        const group = {
            name: groupNameRef.current.value,
            ids: ids.map(index => props.items[index].id),
        }
        console.log(group)
        updateItem(props.url + "/group", group)
    }

    const usedHandler = () => {
        console.log("Used button clicked...")

        const mice = ids.map(index => props.items[index])
        addItem(props.url + "/remove", mice)
    }

    const cellClickHandler = (cell) => {
        console.log(cell)
      }
  
    const options = {
        // filterType: "checkbox",
        onRowClick: rowData => selectChangeHandler(rowData),
        rowsPerPageOptions: [10, 30, 100],
        rowsPerPage: 30,
        onRowSelectionChange: (current, allRows, rows) => rowSelectHandler(current, allRows, rows),
        customToolbarSelect: rows => { }, // get rid of trash can 
        onCellClick:(data, cell)=>cellClickHandler(data),
    };

    return (
        <>
            <MUIDataTable
                title={props.title}
                data={props.items}
                columns={columns}
                options={options}
            />
        </>
    )
}

export default MiceList