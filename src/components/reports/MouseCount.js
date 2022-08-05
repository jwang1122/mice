import { useContext, useEffect, useState } from "react"
import useFetch from "../hooks/UseFetch"
import AuthContext from "../login/auth-context"


const MouseCount = () => {

    const wk1 = new Date()
    const wk5 = new Date(wk1)
    wk5.setDate(wk5.getDate() - 28)
    const wk9 = new Date(wk5)
    wk9.setDate(wk9.getDate() - 28)
    const wk13 = new Date(wk9)
    wk13.setDate(wk13.getDate() - 28)
    const wk17 = new Date(wk13)
    wk17.setDate(wk17.getDate() - 28)
    const wk21 = new Date(wk17)
    wk21.setDate(wk21.getDate() - 28)
    const wk25 = new Date(wk21)
    wk25.setDate(wk25.getDate() - 28)
    const wk29 = new Date(wk25)
    wk29.setDate(wk29.getDate() - 28)
    const wk33 = new Date(wk29)
    wk33.setDate(wk33.getDate() - 28)
    const wk37 = new Date(wk33)
    wk37.setDate(wk37.getDate() - 28)
    const wk41 = new Date(wk37)
    wk41.setDate(wk41.getDate() - 28)
    const wk45 = new Date(wk41)
    wk45.setDate(wk45.getDate() - 28)
    const wk49 = new Date(wk45)
    wk49.setDate(wk49.getDate() - 28)
    const wk53 = new Date(wk49)
    wk53.setDate(wk53.getDate() - 28)
    const authCtx = useContext(AuthContext);

    const [mice, setMice] = useState([])
    const [data, loadError, load] = useFetch(authCtx.url)
    useEffect(() => {
        if (data && data.mice.length > 0) {
            setMice(data.mice)
        }
    }, [data])
    var count1 = 0
    var count5 = 0
    var count9 = 0
    var count13 = 0
    var count17 = 0
    var count21 = 0
    var count25 = 0
    var count29 = 0
    var count33 = 0
    var count37 = 0
    var count41 = 0
    var count45 = 0
    var count49 = 0
    var count53 = 0
    mice.forEach(mouse => {
        const date = new Date(mouse.birthdate)
        if (date >= wk53) {
            if (wk5 <= date && date < wk1) {
                count1++
            }
            if (wk9 <= date && date < wk5) {
                count1++
            }
            if (wk13 <= date && date < wk9) {
                count1++
            }
            if (wk17 <= date && date < wk13) {
                count1++
            }
            if (wk21 <= date && date < wk17) {
                count1++
            }
            if (wk25 <= date && date < wk21) {
                count1++
            }
            if (wk29 <= date && date < wk25) {
                count1++
            }
            if (wk33 <= date && date < wk29) {
                count1++
            }
            if (wk37 <= date && date < wk33) {
                count1++
            }
        }
    })
    return (<div>
        {wk1.toLocaleDateString()} -
        {wk5.toLocaleDateString()}
    </div>)
}

export default MouseCount