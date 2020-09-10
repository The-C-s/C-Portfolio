import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import Landing from './components/pages/Landing';
import Dashboard from './components/pages/Dashboard';

import './App.css';

const App = () => {
  return(
    // Provider provides Redux state management
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/dashboard" component={Dashboard}/>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
