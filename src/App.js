import React, { useState, useEffect } from 'react'
import MouseList from "./components/mice/MiceList"
import AddMouse from './components/mice/AddMouse'
import useFetch from './components/hooks/UseFetch'
import classes from './App.module.css'
import Card from './components/UI/Card'
import Button from './components/UI/Button'
import addItem from './components/lib/create'
import updateItem from './components/lib/update'
import MouseDetail from './components/mice/MouseDetail'

const dummy = [
  {id:"1", msid:"A1023", gender:"M", geno:"+/-", dob:"11/9/2021", ear:"NH", mom:"A1023", dad:"A123", cage:"A01", user:"17-05 CL", date:"A0189"},
  {id:"2", msid:"A1023", gender:"M", geno:"+/-", dob:"11/9/2021", ear:"NH", mom:"A1023", dad:"A123", cage:"A01", user:"17-05 CL", date:"A0189"},
]

function App() {
  const url = "http://192.168.1.104:5000"
  const [mice, setMice] = useState(dummy)
  const [addNewMouse, setAddNewMouse] = useState(false)
  const [isDetail, setIsDetail] = useState(false)
  const [mouse, setMouse] = useState(null)

  const [data, loadError, load] = useFetch(url)

  // console.log(data)
  useEffect(() => {
    if (data && data.mice.length > 0) {
      const updatedMice = data.mice.map((mouse) => {
        // mouse.dob = { dob: (new Date(mouse.dob)).toString() }
        const dob = mouse.dob
        if (dob.includes("/")) {
          const a1 = dob.split("/")
          const format = a1[2] + "-" + a1[0] + "-" + a1[1]
          mouse.dob = format
        }
        return mouse;
      }
      )
      setMice(updatedMice)
    }
  }, [data])

  const addNewMouseHandler = () => {
    setAddNewMouse(true)
  }

  const cancelHandler = () => {
    setAddNewMouse(false)
  }

  const addMouseHandler = (mouse) =>{
    console.log(mouse)
    addItem(url+'/mice', mouse, load)
  }

  const selectChangeHandler = (id) => {
    const mouse = mice.find(mouse=>mouse.id===id)
    setMouse(mouse)
    setIsDetail(true)
  }

  const updateMouseHandler = (mouse)=>{
    updateItem(url+'/mice/'+mouse.id, mouse, load)
  }

  return (
    <div className='App'>
      <h2>Mice Management Website</h2>
      {addNewMouse && <AddMouse onAddMouse={addMouseHandler} onCancel={cancelHandler} />}
      {(isDetail && mouse) && <MouseDetail mouse={mouse} onUpdate={updateMouseHandler} onCancel={()=>setIsDetail(false)} />}
      {!addNewMouse && <Card><Button type="button" name="Add New Mouse" onClick={addNewMouseHandler} /></Card>}
      {data && <MouseList mice={mice} onSelectChange={selectChangeHandler}/>}
      {!data && <p className={classes.error}>{loadError}</p>}
    </div>
  );
}

export default App;
