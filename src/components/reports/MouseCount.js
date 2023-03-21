import { useContext, useEffect, useState } from "react"
import useFetch from "../hooks/UseFetch"
import AuthContext from "../login/auth-context"
import MUIDataTable from 'mui-datatables';
const columns = [
    { name: 'week', label: 'Week Range', options: { filter: false, sort: true } },
    { name: 'count', label: 'Count', options: { filter: false, sort: true } },
];

const MouseCount = () => {
    const authCtx = useContext(AuthContext);
    const [mice, setMice] = useState([])
    const [data, ,] = useFetch(authCtx.url)

    const weeks = [new Date()], counts = [0]
    for (let i = 0; i < 8; i++) {
        const week = new Date(weeks[weeks.length - 1])
        week.setDate(week.getDate() - 28)
        weeks.push(week)
        counts.push(0)
    }
    useEffect(() => {
        if (data && data.mice.length > 0)
            setMice(data.mice)
    }, [data])
    var outofrange = 0
    mice.forEach(mouse => {
        const date = new Date(mouse.birthdate)
        if (date < weeks[-1] || date >= weeks[0])
            outofrange++
        else for (let i = 1; i < weeks.length; i++)
            if (date >= weeks[i]) { counts[i - 1]++; break }
    })
    const format = (upper, lower, count) => {
        const lower2 = new Date(lower)
        lower2.setDate(lower2.getDate() + 1)
        const lowerStr = lower2.toLocaleDateString()
        const upperStr = upper.toLocaleDateString()
        const week = `${lowerStr} - ${upperStr}`
        return { week: week, count: count }
    }
    const data2 = [
        { week: 'Total', count: mice.length },
        { week: 'Out of Range', count: outofrange }]
    for (let i = 1; i < weeks.length; i++){
        data2.push(format(weeks[i - 1], weeks[i], counts[i]))}
    return (
        <MUIDataTable
            title={"Mouse Count"}
            data={data2}
            columns={columns}
            options={{
                customToolbarSelect: () => { }, // get rid of trash can 
            }}
        />
    )
}

export default MouseCount