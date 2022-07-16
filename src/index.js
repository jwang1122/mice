import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';

  //192.168.3.19
const url = 'http://10.66.1.99:5000';
const root = createRoot(document.getElementById('root'));
root.render(<App url={url}/>)