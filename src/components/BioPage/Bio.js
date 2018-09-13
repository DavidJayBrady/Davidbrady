import React, { Component } from "react";
import "./Bio.css";

import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Route } from "react-router";
import { Link } from "react-router-dom";

import Books from "./Books";
import French from "./French";
import AboutMe from "./AboutMe";

import RightArrow from "../../Assets/Bio/right_arrow.jpg";

class Bio extends Component {
	constructor() {
		super();
		this.moveRight = this.moveRight.bind(this);
		this.setActiveKey = this.setActiveKey.bind(this);
		this.state = {activeKey: 1};
	}

	setActiveKey(key)
	{
		this.setState({activeKey: key});
	}

	moveRight() {
		alert("clicked");
		var element = document.getElementById("bookPage");
		element.scrollIntoView();
	}


	componentDidMount()
	{

	}

	render() {

		return (
			<div className="bioPage" style={{ height: "100%" }}>
				<Navbar style={{backgroundColor:"darkred", marginBottom: 0}} >
					<Nav bsStyle="tabs"  justified activeKey={this.state.activeKey} onSelect={this.setActiveKey}>
						<NavItem eventKey={1} href="#">
							<Link to="/bio#aboutme"> About Me </Link>
						</NavItem>
						<NavItem eventKey={2} href="#">
							<Link to="/bio#books"> Books </Link>
						</NavItem>
						<NavItem eventKey={3} href="#">
							<Link to="/bio#french"> French </Link>
						</NavItem>
						<NavItem eventKey={4} href="#">
							<Link to="/"> Back </Link>
						</NavItem>
					</Nav>
				</Navbar>

				<img
					src={RightArrow}
					onClick={this.moveRight}
					style={{
						backgroundColor: "yellow",
						width: "5%",
						height: "5%",
						position: "absolute",
						top: "50%",
						right: "0px"

					}}
				/>

				<div
					id="bio"
					style={{
						display: "flex",
						width: "300vw",
						height: "100%",
						backgroundColor: "blueViolet",
					}}
				>
					<AboutMe />
					<Books />
					<French />
				</div>
				{/**/}
				{/*<div style={{ height: "100%" }}>*/}
				{/*<switch>*/}
				{/*<Route exact path="/bio/" component={AboutMe} />*/}
				{/*<Route exact path="/bio/books" component={Books} />*/}
				{/*<Route exact path="/bio/french" component={French} />*/}
				{/*<Route exact path="/bio/resume" component={Resume} />*/}
				{/*</switch>*/}
				{/*</div>*/}
			</div>
		);
	}
}

export default Bio;
