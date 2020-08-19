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
import FunkosList from './components/FunkosList';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/universe/:name">
          <FunkosList />
        </Route>
      </Switch>
      <Footer />
    </Router>

  );
}

export default App;
