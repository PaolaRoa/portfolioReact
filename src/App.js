import {React} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Link, 
  Switch,
  Route
  }
from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Header from './components/Header';



function App() {

  return (
    <>
    <Router>
      <Header />
      <Route exact path="/">
          <Home />
      </Route>
    </Router>
    </>
  );
}

export default App;
