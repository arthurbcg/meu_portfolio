import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'pretty-checkbox-react';
import Home from './components/Pages';

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;