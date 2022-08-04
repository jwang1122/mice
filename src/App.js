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
import UsedMice from './components/used/UsedMice'
const Router = props => {
  document.title = "Mice manager"

  return (
    <AuthContextProvider>
      <BrowserRouter>
        <ResponsiveAppBar classes={classes.App} />
        <Routes>
          <Route path="/" element={<Home display={false} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cages" element={<Cages />} />
          <Route path="/mice" element={<Mice />} />
          <Route path="/pair" element={<Pair />} />
          <Route path="/wean" element={<Wean />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/action" element={<Actions />} />
          <Route path="/report" element={<PdfReport />} />
          <Route path="/used" element={<UsedMice />} />
          <Route path="/history" element={<History />} />
          <Route path="/Pairing" element={<PairingReminder />} />
          <Route path="/Breeding" element={<BreedingReminder />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="/login" element={<Home display={true} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  )
}

export default Router;
