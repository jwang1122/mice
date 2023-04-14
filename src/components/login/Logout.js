import AuthContext from "./auth-context"
import { useContext, useEffect } from "react"
import { useNavigate } from 'react-router-dom'


const Logout = () => {
    const authCtx = useContext(AuthContext)
    const navigate = useNavigate()
  
    useEffect(() => {
      authCtx.onLogout()
      navigate('/')
    }, [authCtx, navigate])
  
    return null
  }
  

export default Logout