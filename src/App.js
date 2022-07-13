import ResponsiveAppBar from './components/Nav'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AddMouse from './components/AddMouse'
import AddBreeding from './components/AddBreeding'
import Mice from './Mice'

function App() {
  document.title="Mice manager"
  return (
    <BrowserRouter>
        <ResponsiveAppBar/>
        <Routes>
            <Route path="/" element={<Mice/>}/>
            <Route path="/home" element={<Mice/>}/>
            <Route path="/addmouse" element={<AddMouse/>}/>
            <Route path="/addbreeding" element={<AddBreeding/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
