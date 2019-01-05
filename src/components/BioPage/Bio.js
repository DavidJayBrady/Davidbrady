import React, { Component } from "react";
import RightArrow from "../../Assets/Bio/right_arrow.png";

import "./Bio.css";

import Books from "./Books/Books";
import Hobbies from "./Hobbies/Hobbies";
import AboutMe from "./AboutMe/AboutMe";

import $ from "jquery";

class Bio extends Component {
	constructor() {
		super();
		this.changeTab = this.changeTab.bind(this);
		this.setActiveKey = this.setActiveKey.bind(this);
		this.showOrHideLeftArrow = this.showOrHideLeftArrow.bind(this);
		this.showOrHideRightArrow = this.showOrHideRightArrow.bind(this);
		this.state = {
			0: "teal",
			1: "transparent",
			2: "transparent",
			activeKey: 0,
		};
	}

	setActiveKey(key) {
		this.setState({ activeKey: key });
	}

	componentDidMount() {}

	changeTab(direction) {

		console.log("begin: " + this.state.activeKey);

		if (direction === "right") {
			$("#bio").animate({
				marginLeft: "-=100vw",
			});
			this.state[this.state.activeKey] = "transparent";
			this.state[this.state.activeKey+1] = "teal";

			this.setState({ activeKey: this.state.activeKey + 1});
		} else {
			$("#bio").animate({
				marginLeft: "+=100vw",
			});
			this.state[this.state.activeKey] = "transparent";
			this.state[this.state.activeKey-1] = "teal";
			this.setState({ activeKey: this.state.activeKey - 1 });
		}

		console.log(this.state.activeKey);
	}

	showOrHideLeftArrow ()
	{
		if (this.state.activeKey === 0)
		{
			return "none";
		}
		else
		{
			return "inherit";
		}
	}

	showOrHideRightArrow ()
	{
		if (this.state.activeKey === 2)
		{
			return "none";
		}
		else
		{
			return "inherit";
		}
	}

	render() {
		return (
			<div className="bioPage" id="bioPage" style={{ height: "100%" }}>
				<div className="psuedoNav">
					<div
						className="psuedoNavItem"
						style={{
							backgroundColor: this.state[0],
						}}
					>
						<h4 className="navText">About Me</h4>
					</div>
					<div
						className="psuedoNavItem"
						style={{
							backgroundColor: this.state[1],
						}}
					>
						<h4>Hobbies</h4>
					</div>
					<div
						className="psuedoNavItem"
						style={{
							backgroundColor: this.state[2],
						}}
					>
						<h4>Book Quotes</h4>
					</div>
				</div>

				<div
					id="bio"
					style={{
						display: "flex",
						width: "300vw",
						height: "100%",
						scroll: "smooth",
					}}
				>
					<AboutMe />
					<Hobbies />
					<Books />
				</div>

				<img
					src={RightArrow}
					alt="LeftArrow"
					onClick={() => this.changeTab("left")}
					style={{
						width: "5%",
						height: "10%",
						position: "absolute",
						top: "50%",
						left: "0px",
						display: this.showOrHideLeftArrow(),
						mozTransform: "scale(-1, -1)",
						oTransform: "scale(-1, -1)",
						webkitTransform: "scale(-1, -1)",
						transform: "scale(-1, -1)"
					}}
				/>

				<img
					src={RightArrow}
					alt="RightArrow"
					onClick={() => this.changeTab("right")}
					style={{
						width: "5%",
						height: "10%",
						position: "absolute",
						top: "50%",
						right: "0px",
						display: this.showOrHideRightArrow()
					}}
				/>
			</div>
		);
	}
}

export default Bio;
