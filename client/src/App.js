import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './View/Home'
import Second from './View/Second'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/second">
          <Second />
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
