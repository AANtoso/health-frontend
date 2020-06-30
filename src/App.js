import React from 'react';
import Health from '../src/containers/Health';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/NavbarComponents/Navbar';
import About from './components/NavbarComponents/About';
import Home from './components/NavbarComponents/Home';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='ui container App'>
        <br/>
        <h1> diagnosisTracker</h1>
        <Navbar />
        <Switch>
          <Routh exact path='/about' component={About}/>
          <Routh exact path='/' component={Home}/>
          <Routh exact path='/healths' component={Health}/>
        </Switch>
      </div>
    );
  }
  
}

export default App;
