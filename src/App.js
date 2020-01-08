import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import logo from './logo.svg';
import Home from './route/Home.js';
import Package from './route/Package.js';
import Promo from './route/Promo.js'
import Feedback from './route/Feedback.js';
import './App.css';
import Navbar from './Navbar.js';
import Button from './component/Button.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home}/>
        <Route path="/package" component={Package}/>
        <Route path="/promo" component={Promo}/>
        <Route path="/feedback" component={Feedback}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
