import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './route/Home.js';
import Package from './route/Package.js';
import Promo from './route/Promo.js'
import Feedback from './route/Feedback.js';
import Login from './route/Login.js';
import './App.css';
import Navbar from './Navbar.js';
import { CookiesProvider, withCookies } from 'react-cookie';

class App extends Component {

  render() {
    const { cookies } = this.props;
    let number = cookies.get('number');

    if(number){
    return (
      <CookiesProvider>
        <BrowserRouter>
          <div className="App">
            <Navbar number={number}/>
            <Route exact path="/" component={Home} />
            <Route path="/package" component={Package} />
            <Route path="/promo" component={Promo} />
            <Route path="/feedback" component={Feedback} />
          </div>
        </BrowserRouter>
      </CookiesProvider>
    );
    }
    else{
      return (
        <Login/>
      );
    }
  }
}

export default withCookies(App);
