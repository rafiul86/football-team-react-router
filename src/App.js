import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import League from './component/League';
import LeagueDetails from './component/LeagueDetails';

function App() {
  return (
    <div>
     <Router>
      <div>
        <nav>
         
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/league">
            <League/>
          </Route>
          <Route path="/:id">
            <LeagueDetails/>
          </Route>
          <Route exact path="/">
            <League/>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
