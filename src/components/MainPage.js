import React, { Component } from 'react';

import HighLightSection from './HighlightSection';
import cog from "../Assets/backgroundcog.jpg";


class MainPage extends Component {

	render() {
		return (
			<div className="App">
				<div>
					<div className="container" style={{width:"100%", height:"100%"}}>
						<img src={cog} alt="cog" style={{width:"100%", height:"100%"}}  className="container"/>
						<HighLightSection on_enter={this.entered} passiveColor="blue"   activeColor="lightblue"
										  location={"top-left"}     linkTo="/yoshi" />
						<HighLightSection on_enter={this.entered} passiveColor="purple" activeColor="mediumpurple"
										  location={"top-right"}    linkTo="/bio" />
						<HighLightSection on_enter={this.entered} passiveColor="green"  activeColor="lightgreen"
										  location={"bottom-left"}  linkTo="/" />
						<HighLightSection on_enter={this.entered} passiveColor="red"    activeColor="orange"
										  location={"bottom-right"} linkTo="/"/>
					</div>
				</div>
			</div>
		)
	}
}

export default MainPage;

