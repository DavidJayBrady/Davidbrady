import React, { Component } from "react";

class Book extends Component {
	constructor() {
		super();
		this.changeQuote = this.changeQuote.bind(this);
	}

	changeQuote() {
		this.props.controlQuote(this.props.quote);
	}

	render() {
		return (
			<div className={this.props.cssClass} onMouseEnter={this.changeQuote}>
				<img
					className="bookImage"
					src={this.props.image}
					alt={this.props.altText}
				/>
			</div>
		);
	}
}

export default Book;
