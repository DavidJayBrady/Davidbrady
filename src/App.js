import React, { Component } from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';

import MainPage from './components/MainPage';
import Yoshi from './components/Yoshi';
import Bio from './components/BioPage/Bio';

class App extends Component {
  constructor() {
    super();
    this.entered = this.entered.bind(this);
    //document.body.style.overflow = "hidden";
  }

  entered(section) {
    console.log('stuff');
    console.log(section);
    // change section visibility
  }

  render() {
    return (
      <BrowserRouter>
        <div style={{height: '100%'}}>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/yoshi" component={Yoshi} />
          <Route path="/bio/" component={Bio} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
