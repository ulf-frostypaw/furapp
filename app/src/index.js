import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-tooltip/dist/react-tooltip.css' // REACT tooltip
import App from './App';
import StatusConnection from './components/StatusConnection';

import { BrowserRouter ,
} from 'react-router-dom'


//import NextProgress from "next-progress";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <StatusConnection />
    <App />
  </BrowserRouter >
);

