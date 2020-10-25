import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./containers/Header/header";
import Footer from "./containers/Footer";
import HomePage from "./containers/HomePage";
import FunkosList from "./components/FunkosList";
import Container from "@material-ui/core/Container";
import TestPage from "./containers/Test/test"
import SimpleTable from "./components/Table";
import { UniversesPage } from "./components/Universes/Universes";
import Favorite from "./components/Favorite";

function App() {
  return (
    <div style={{margin:'-8px', backgroundColor: 'black'}}>
    <Router>
      <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/universe/:universeId">
            <FunkosList />
          </Route>
          <Route path="/collection">
            <SimpleTable/>
          </Route>
          <Route path="/universes">
            <UniversesPage/>
          </Route>
          <Route path="/favorite">
            <Favorite/>
          </Route>
        </Switch>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
