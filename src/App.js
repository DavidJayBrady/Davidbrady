import React, { Component } from 'react';
import './App.css';
import './Components/HighlightSection'

import cog from "./Assets/backgroundcog.jpg";
import HighlightSection from "./Components/HighlightSection";



class App extends Component {

	constructor()
	{
		super();
		this.entered = this.entered.bind(this);
	}

	entered(section)
	{
		console.log("stuff")
		console.log(section);
		// change section visibility
	}

  render() {
    return (
      <div className="App">

		  <div>
		  	<div className="container">
			  <img src={cog} alt="cog" style={{width:"100%", height:"100%"}} className="container"/>
				<HighlightSection on_enter={this.entered} passiveColor="blue" activeColor="lightblue" location={"top-left"}/>
				<HighlightSection on_enter={this.entered} passiveColor="purple" activeColor="mediumpurple" location={"top-right"}/>
				<HighlightSection on_enter={this.entered} passiveColor="green" activeColor="lightgreen" location={"bottom-left"}/>
				<HighlightSection on_enter={this.entered} passiveColor="red" activeColor="orange" location={"bottom-right"}/>
			</div>
		  </div>
      </div>
    );
  }
}

export default App;
