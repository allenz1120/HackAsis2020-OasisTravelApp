import React from 'react';
import OasisApp from './components/OasisApp';
import About from './components/About';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={OasisApp} />
          <Route path="/about" component={About} />
        </Switch>

      </div>
    </Router>

  );
}

export default App;
