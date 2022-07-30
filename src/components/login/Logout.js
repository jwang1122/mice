import AuthContext from "./auth-context"
import { useContext, useEffect } from "react"
import { useNavigate } from 'react-router-dom'


const Logout = (props) => {
    console.log("Logout()...")
    const authCtx = useContext(AuthContext)
    authCtx.onLogout()
    const navigate = useNavigate()
    useEffect(()=>{
        navigate('/')
    }, [navigate])
    return <></>
}

export default Logout