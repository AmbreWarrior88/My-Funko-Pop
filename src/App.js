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

function App() {
  return (
    <>
      <Header />

      <Category />

      <SimpleTable />
    </>
  );
}

export default App;
