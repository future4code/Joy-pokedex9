import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import backgroundImage from './pattern.png';

import NavBar from './Components/layout/NavBar';
import Dashboard from './Components/layout/Dashboard';
import SearchBar from './Components/search/SearchBar';
import Pokemon from './Components/pokemon/Pokemon';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" style={{ background: `url(${backgroundImage})` }}>
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;