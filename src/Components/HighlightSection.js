import React, { Component } from 'react';

class HighlightSection extends Component {

	constructor()
	{
		super();
		this.state = {hover:false};

		this.changeColor = this.changeColor.bind(this);
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

	render() {
		return (
			<div className={this.props.location}
				 style={{backgroundColor: this.changeColor()}}
				 onMouseEnter={() => this.setState({hover:true})}
				 onMouseLeave={() => this.setState({hover:false})}>
			</div>
		);
	}
}

export default HighlightSection;
