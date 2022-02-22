import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import frowStore from './store/frowStore.js';
import {Provider} from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={frowStore}>
        <App />
    </Provider>
  </React.StrictMode>, 
  document.getElementById('root')
);
