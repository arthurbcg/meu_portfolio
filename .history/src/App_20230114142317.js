import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import SignUp from './pages/signup';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/sobreMim' component={About} />
        <Route path='/Projetos' component={Services} />
        <Route path='/Conhecimento' component={Contact} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;