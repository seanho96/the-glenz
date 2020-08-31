import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import InvestorSheet from './components/InvestorSheet';
import SalesPackage from './components/SalesPackage';
import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import Units from './components/Units';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';

function App() {
  return (
    <Router basename="/the-glenz">
      <div className="app">
        <div className="container">
          <Switch>
            <Route path="/investorsheet">
              <Navigation />
              <InvestorSheet />
            </Route>
            <Route path="/salespackage">
              <Navigation />
              <SalesPackage />
            </Route>
            <Route path="/">
              <Navigation />
              <Header />
              <About />
              <Units />
              <WhyUs />
              <Contact />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
