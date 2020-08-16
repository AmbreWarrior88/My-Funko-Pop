import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './containers/Header';
import Footer from './containers/Footer';
import HomePage from './containers/HomePage';
import FunkoCard from './components/Card';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact Path="/">
          <HomePage />
        </Route>
        <Route path="/funkoCard">
          <FunkoCard />
        </Route>
      </Switch>
      <Footer />
    </Router>

  );
}

export default App;
