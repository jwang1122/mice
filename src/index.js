import ReactDom from 'react-dom'
import './index.css'
import App from './App'

  //192.168.3.19
const url = 'http://10.66.1.99:5000'
ReactDom.render(<App url={url}/>, document.getElementById('root'))