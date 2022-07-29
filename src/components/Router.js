import ResponsiveAppBar from './Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Pair from './actions/Pair'
import Wean from './actions/Wean'
import Actions from './actions/Actions'
import Transfer from './actions/Transfer'
import Mice from './mice/Mice'
import Cages from './cages/Cages.js'
import PdfReport from './reports/PdfReport'
import UsedMice from './used/UsedMice'
import PairingReminder from './actions/PairingReminder'
import BreedingReminder from './actions/BreedingReminder'
import Logout from './actions/Logout'


const Router = props => {
  const url = props.url
  document.title = "Mice manager"
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Mice url={url} />} />
        <Route path="/cages" element={<Cages url={url} />} />
        <Route path="/mice" element={<Mice url={url} />} />
        <Route path="/pair" element={<Pair url={url} />} />
        <Route path="/wean" element={<Wean url={url} />} />
        <Route path="/transfer" element={<Transfer url={url} />} />
        <Route path="/action" element={<Actions url={url} />} />
        <Route path="/report" element={<PdfReport url={url} />} />
        <Route path="/used" element={<UsedMice url={url} />} />
        <Route path="/Pairing" element={<PairingReminder url={url} />} />
        <Route path="/Breeding" element={<BreedingReminder url={url} />} />
        <Route path="/Logout" element={<Logout url={url} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
