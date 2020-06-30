import React, { Component } from 'react';
import Health from './containers/HealthContainer';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Navbar from './components/NavBarComponents/Navbar';
import About from './components/NavBarComponents/About';
import Home from './components/NavBarComponents/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='ui container App'>
        <br/>
        <h1> diagnosisTracker</h1>
      
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path='/about' component={About}/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/healths' component={Health}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
  
}

export default App;
