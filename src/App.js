import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/Home';

import './App.css';


class App extends React.Component {
 
 state = {

  }

componentDidMount() {

  }


render()
{
  return (
    <Router>
    <div>
    <Switch>
      <Route exact path='/' component={Home}/>
    </Switch>
    </div>
    </Router>
    );
  }
}

export default App;
