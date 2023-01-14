import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'pretty-checkbox-react';
import Home from './pages';
import sobreMim from './pages/sobre_mim';
import Projetos from './pages/projetos';
import Conhecimento from './pages/conhecimentos';
import Contato from './pages/contato';

function App() {
  return (
    <Navbar />
    <Router>
      <Switch>
        <Route path='/' exact component={Home} /> 
        <Route path='/sobreMim' component={sobreMim} />
        <Route path='/Projetos' component={Projetos} />
        <Route path='/Conhecimento' component={Conhecimento} />
        <Route path='/Contato' component={Contato} />    
      </Switch>
    </Router>
  );
}

export default App;