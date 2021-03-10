import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import League from './component/League';
import Team from './component/Team';
const App = () => {
    return (
        <div>
            <Router>
            <Switch>
          <Route path="/league">
            <League/>
          </Route>
          <Route path="/:id">
            <Team/>
          </Route>
          <Route path="/">
            <League/>
          </Route>
        </Switch>
            </Router> 
        </div>
    );
};

export default App;