import React from 'react';
import './App.css';
import './index.css';
import { BrowserRouter, Route, Link } from "react-router-dom";

import Welcome from '../src/pages/Home.js';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <div>
                  <Route exact path='/' component={Welcome} />
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;

