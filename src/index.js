// project adapted from "https://www.taniarascia.com/crud-app-in-react-with-hooks/"
// variable naming includes "set" to id setters
import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';

ReactDOM.render(
  // <App />,
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);