import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyContext from '../src/Context/Context';
import App from './App';
import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  <React.StrictMode>
    <MyContext>
      <App />
    </MyContext>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
