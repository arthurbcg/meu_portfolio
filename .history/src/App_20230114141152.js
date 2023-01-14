import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'pretty-checkbox-react';
import Home from './pages';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} /> 
        <Route path='/sobreMim' component={Home} /> 
      </Switch>
    </Router>
  );
}

export default App;