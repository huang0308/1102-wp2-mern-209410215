import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './assets/css/index.css';
import App_15 from './App_15';
import {AppProvider_15} from './context/appContext_15'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider_15>
    <App_15 />
    </AppProvider_15>
  </React.StrictMode>,
  document.getElementById('root')
);

