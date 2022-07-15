import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

  //192.168.3.19
const url = 'http://192.168.3.19:5000'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App url={url}/>
  </React.StrictMode>
);