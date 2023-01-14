import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'pretty-checkbox-react';
import Home from './pages';
import sobreMim from './pages/sobre_mim';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} /> 
        <Route path='/sobreMim' component={sobreMim} />
        <Route path='/' exact component={} />  
      </Switch>
    </Router>
  );
}

export default App;