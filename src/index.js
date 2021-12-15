import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import AppRoutes from './AppRoutes'

ReactDOM.render(
  <React.StrictMode>
     <Router>
    <AppRoutes />
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);