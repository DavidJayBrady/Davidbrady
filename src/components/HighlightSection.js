import React, { Component } from 'react';
import {Redirect} from 'react-router';

class HighlightSection extends Component {

	constructor()
	{
		super();
		this.state = {hover:false, navigate: false};

		this.changeColor = this.changeColor.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}


	changeColor()
	{
		if (this.state.hover === true)
		{
			return this.props.activeColor;
		}
		else
		{
			return this.props.passiveColor;
		}
	};



	handleClick()
	{
		this.setState({hover:true, navigate:true});
	}

	render() {

		if (this.state.navigate)
		{
			return <Redirect to={this.props.linkTo}/>
		}

		return (
			<div className={this.props.location}
				 style={{backgroundColor: this.changeColor()}}
				 onMouseEnter={() => this.setState({hover:true})}
				 onMouseLeave={() => this.setState({hover:false})}
				 onClick={this.handleClick}>
			</div>
		);
	}
}

export default HighlightSection;
