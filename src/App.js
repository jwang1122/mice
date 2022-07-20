import ResponsiveAppBar from './components/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Pair from './components/Pair'
import AddCage from './components/AddCage'
import Wean from './components/Wean'
import ActionList from './components/ActionList'
import Mice from './components/Mice'
import Cages from './Cages.js'
import PdfReport from './components/PdfReport'

const App = props => {
  const url = props.url
  document.title = "Mice manager"
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Mice url={url} />} />
        <Route path="/mice" element={<Mice url={url} />} />
        <Route path="/cages" element={<Cages url={url} />} />
        <Route path="/addcage" element={<AddCage url={url} />} />
        <Route path="/pair" element={<Pair url={url} />} />
        <Route path="/wean" element={<Wean url={url} />} />
        <Route path="/action" element={<ActionList url={url} />} />
        <Route path="/report" element={<PdfReport url={url} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
