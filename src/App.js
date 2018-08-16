import React, { Component } from 'react';
import './App.css';

import {BrowserRouter} from "react-router-dom";
import {Route} from 'react-router';

import MainPage from "./components/MainPage";
import Yoshi from "./components/Yoshi";



class App extends Component {

	constructor()
	{
		super();
		this.entered = this.entered.bind(this);
	}

	entered(section)
	{
		console.log("stuff");
		console.log(section);
		// change section visibility
	}


  render() {
    return ( <BrowserRouter>
			<div>
					<Route exact path="/" component={MainPage} />
					<Route exact path="/yoshi" component={Yoshi} />
			</div>
				</BrowserRouter>
    );
  }
}

export default App;
