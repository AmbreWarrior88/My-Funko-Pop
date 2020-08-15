import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SimpleTable from './containers/Table'
import Header from './containers/Header';
import Category from './containers/Category';
import Footer from './containers/Footer';

function App() {
  return (
    <>
      <Header />

      <Category />

      <SimpleTable />

      <Footer />
    </>
  );
}

export default App;
