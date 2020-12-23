import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import User from './pages/User';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to={
              {
                pathname: "/About",
                state: {
                  from: "root"
                }
              }
            }>About</Link>
          </li>
          <li>
            <Link to="/user/john/McMillan">User</Link>
          </li>
          <div>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route exact path="/user/firstname/lastname" component={User}/>
            </Switch>
          </div>
        </ul>
      </header>
    </div>
    </Router>
  );
}

export default App;
