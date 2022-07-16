import ResponsiveAppBar from './components/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddMouse from './components/AddMouse'
import AddCage from './components/AddCage'
import AddBreeding from './components/AddBreeding'
import Mice from './Mice'
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
        <Route path="/home" element={<Mice url={url} />} />
        <Route path="/cages" element={<Cages url={url} />} />
        <Route path="/addmouse" element={<AddMouse url={url} />} />
        <Route path="/addcage" element={<AddCage url={url} />} />
        <Route path="/addbreeding" element={<AddBreeding url={url} />} />
        <Route path="/report" element={<PdfReport url={url} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
