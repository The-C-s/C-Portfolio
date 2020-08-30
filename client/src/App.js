import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Provider} from 'react-redux';

import './App.css';

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
 
function App() {
 return (
    <Router>
      <div className="App">
        <Navbar/>
        <Route path="/" component = {Landing} exact />
        <Switch>
        </Switch>   
      </div>
    </Router>
   
 );
}
 
export default App;

