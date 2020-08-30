import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Provider} from 'react-redux';

import './App.css';

import Navbar from "./components/Navbar";
 
function App() {
 return (
   <Provider>
    <Router>
      <div className="App">
        <Navbar/>
        <Route/>
        <Switch>
        </Switch>   
      </div>
    </Router>
   </Provider>
 );
}
 
export default App;

