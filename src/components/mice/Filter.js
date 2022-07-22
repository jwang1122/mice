import { useState } from 'react'
import Select from '../UI/Select'

const Filter = props => {
    const options = [
        'All', 'ASM', 'Nlrp3', 'WT', 'SRB1'
    ]
    const [filter, setFilter] = useState(options[0])
    const selectHandler = event => {
        props.onChangeFilter(event.target.value)
        setFilter(event.target.value)
    }
    return <Select label="Filter by genome" value={filter} onChange={selectHandler} options={options} />
}

export default Filter