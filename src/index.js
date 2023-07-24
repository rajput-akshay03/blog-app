import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Context } from './context/appContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context>
        <App />
  </Context>
     
);

