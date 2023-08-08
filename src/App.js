import Navbar from './Navbar';
import Heroes from './Heroes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import NotFound from './Notfound';
import ChangeName from './ChangeName';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/change/:id">
              <ChangeName />
            </Route>
            <Route path="/heroes">
              < Heroes />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;