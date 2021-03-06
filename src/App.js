import ResponsiveAppBar from './components/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Pair from './components/actions/Pair'
import Wean from './components/actions/Wean'
import Actions from './components/actions/Actions'
import Transfer from './components/actions/Transfer'
import Mice from './components/mice/Mice'
import Cages from './components/cages/Cages.js'
import PdfReport from './components/reports/PdfReport'
import UsedMice from './components/used/UsedMice'
import PairingReminder from './components/actions/PairingReminder'
import BreedingReminder from './components/actions/BreedingReminder'
import Logout from './components/actions/Logout'


const App = props => {
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

export default App;
