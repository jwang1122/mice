import { BrowserRouter, Route, Routes } from 'react-router-dom'
import classes from './App.module.css'
import Actions from './components/actions/Actions'
import BreedingReminder from './components/actions/BreedingReminder'
import History from './components/actions/History.js'
import Pair from './components/actions/Pair'
import PairingReminder from './components/actions/PairingReminder'
import Transfer from './components/actions/Transfer'
import Wean from './components/actions/Wean'
import Cages from './components/cages/Cages.js'
import Admin from './components/login/Admin'
import { AuthContextProvider } from './components/login/auth-context'
import Home from './components/login/Home'
import Logout from './components/login/Logout'
import Signup from './components/login/Signup'
import Mice from './components/mice/Mice'
import ResponsiveAppBar from './components/Nav'
import PdfReport from './components/reports/PdfReport'
import MouseCount from './components/reports/MouseCount'
import Report1 from './components/reports/Report1.js'
import UsedMice from './components/used/UsedMice'
import PrivateRoutes from './PrivateRoutes'
const Router = (props) => {
  const url = props.url
  document.title = "Mice manager"
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <ResponsiveAppBar classes={classes.App} />
        <Routes>
          <Route path="/" element={<Home display={false} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Home display={true} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Logout" element={<Logout />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/admin" element={<Admin url={url}/>} />
            <Route path="/cages" element={<Cages url={url}/>} />
            <Route path="/mice" element={<Mice url={url}/>} />
            <Route path="/pair" element={<Pair url={url}/>} />
            <Route path="/wean" element={<Wean url={url}/>} />
            <Route path="/transfer" element={<Transfer url={url}/>} />
            <Route path="/action" element={<Actions url={url}/>} />
            <Route path="/used" element={<UsedMice url={url}/>} />
            <Route path="/history" element={<History url={url}/>} />
            <Route path="/Pairing" element={<PairingReminder url={url}/>} />
            <Route path="/Breeding" element={<BreedingReminder url={url}/>} />
            <Route path="/report" element={<PdfReport url={url}/>} />
            <Route path="/report1" element={<Report1 url={url}/>} />
          </Route>
            <Route path="/mousecount" element={<MouseCount />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  )
}

export default Router;
