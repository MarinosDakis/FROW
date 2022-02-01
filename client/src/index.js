import React from 'react';
import './index.css';
import App from './App';
import Welcome from '../src/pages/Home.js';

function App() {
  return (
    // This is a browser router, a browser router allows us to dynamically add paths
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