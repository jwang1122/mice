import MUIDataTable from 'mui-datatables';
import Input from '../UI/Input'
import Button from '../UI/Button'
import Card from '../UI/Card'
import { useState, useRef } from 'react'
import updateItem from '../lib/update'
import addItem from '../lib/create'

const columns = [
    { name: 'id', options: { display: false, filter: false } },
    { name: 'msid', label: 'MS ID', options: { filter: false, sort: true } },
    { name: 'gender', label: 'Gender', options: { filter: true, sort: false } },
    { name: 'geno', label: 'Geno', options: { filter: false, sort: false } },
    { name: 'birthdate', label: 'Birthdate', options: { filter: false, sort: true } },
    { name: 'ear', label: 'Ear', options: { filter: false, sort: false } },
    { name: 'mom', label: 'Mom', options: { filter: false, sort: false } },
    { name: 'dad', label: 'Dad', options: { filter: false, sort: false } },
    { name: 'cage', label: 'Cage', options: { filter: true, sort: true } },
    { name: 'usage', label: 'Usage', options: { filter: false, sort: false } },
    { name: 'date', label: 'Date', options: { filter: false, sort: false } },
    { name: 'type', label: 'Type', options: { filter: true, sort: true } },
    { name: 'groupid', label: 'Group', options: { filter: true, sort: false } }];


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
        rowsPerPageOptions: [5, 10, 20],
        rowsPerPage: 5,
        onRowSelectionChange: (current, allRows, rows) => rowSelectHandler(current, allRows, rows),
        customToolbarSelect: rows => { }, // get rid of trash can 
        onCellClick:(data, cell)=>cellClickHandler(data),
    };

    return (
        <>
            {props.needGroup && <Card>
                <form onSubmit={submitHandler}>
                    <Input name='groupname' label="Group Name" required inputRef={groupNameRef} />
                    <Button name="Group" type="submit" />
                    <Button name="Used" type="button" onClick={usedHandler} />
                </form>
            </Card>}
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