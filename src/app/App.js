import React from 'react';
import './App.css';
import { HomeComponent } from './home/home-component';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/about">
            
          </Route>
          <Route path="/users">
            
          </Route>
          <Route path="/">
            <HomeComponent></HomeComponent>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
