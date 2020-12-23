import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import ItemDetail from './ItemDetail';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav /> 
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route exact path="/shop" component={Shop}/>
        <Route path="/shop/:id" component={ItemDetail}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
