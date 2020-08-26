import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./containers/Header/header";
import Footer from "./containers/Footer";
import HomePage from "./containers/HomePage";
import FunkosList from "./components/FunkosList";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <Router>
      <Header />
      <Container maxWidth="80%">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/universe/:universeId">
            <FunkosList />
          </Route>
        </Switch>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
