import React, { Component } from 'react';
import './App.css';
import MyRoutes from './config/routes.js';

class App extends Component {
  render() {
    return (
      <div>
        <header className="header-fullwidth">
          <div>
            <h2 id="header"><span className="moto">What if life was..</span>
              <img id="header-logo" alt="Love.ly" src={require('./images/heart-flame.jpeg')}/>
              <strong>Love.ly</strong>
            </h2>
          </div>
        </header>
        { MyRoutes }
        <footer>
          <h1 id="footer"><span className="moto">This could be it..</span>
          </h1>
        </footer>
      </div>
   )
  }
}

export default App;
