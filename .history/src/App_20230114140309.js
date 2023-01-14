import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch } from 'pretty-checkbox-react';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        
      </Switch>
    </Router>
  );
}

export default App;