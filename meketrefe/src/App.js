import React, {Component} from 'react';
import './App.css';
//import PropTypes from 'prop-types';
//import Content from './Content';
import {HashRouter, Route} from 'react-router-dom';
//import './css/home.css';
//import {BrowserRouter, Route, Switch} from 'react-router-dom';


import Kitchen from './components/Kitchen';
import Home from './components/Home';
//import ComandBreakfast from './components/ComandBreakfast';
import Food from './components/Food';
import BreakfastFirebase from './components/BreakfastFirebase';

//import Breakfast from './components/Breakfast';
//import ComandBreakfast from './components/ComandBreakfast';
//import ComandFood from './components/ComandFood';

class App extends Component {
  render(){
    return(
  <HashRouter>
      
      <Route exact path="/" component={Home}/>
      <Route path="breakfastFirebase" component={BreakfastFirebase}/>
      <Route path="food" component={Food}/>
      <Route path="kitchen" component={Kitchen}/>

    </HashRouter>
  );
  }

};

export default App;
