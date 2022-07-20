import { Button } from "@mui/material"
import { useRef, useState } from "react"
import Input from "../UI/Input"
import MouseDetails from './MouseDetails'

const Search = (props) => {
    const msidRef = useRef("")
    const [search, setSearch] = useState(false)

    const details = props.items.find(item => item.Ms_ID === msidRef.current.value)

    return (
        <div>
            <Input label="Mouse ID" inputRef={msidRef} />
            <Button color="primary" variant="contained" onClick={()=>setSearch(true)}>Search</Button>
            {search && <MouseDetails mouse={details} onClose={()=>setSearch(false)}/>}
        </div>
    )
}

export default Search