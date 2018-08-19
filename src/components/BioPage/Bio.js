import React, { Component } from 'react';

import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';

import Books from "./Books";
import French from "./French";
import AboutMe from "./AboutMe";
import Resume from "./Resume";

class Bio extends Component {

	render() {
		return (
			<div>
				<Navbar>
					<Navbar.Header>
						<Navbar.Brand>
							David Brady
						</Navbar.Brand>
						<Nav>
						<NavItem eventKey={10} href="#">
							<Link to="/"> Back </Link>
						</NavItem>
						</Nav>
					</Navbar.Header>
					<Nav           bsStyle="tabs"
								   justified
								   activeKey={1}>
						<NavItem eventKey={1} href="#">
							<Link to="/bio/"> About Me </Link>
						</NavItem>
						<NavItem eventKey={2} href="#">
							<Link to="/bio/books"> Books </Link>
						</NavItem>
						<NavItem eventKey={3} href="#">
							<Link to="/bio/french"> French </Link>
						</NavItem>
						<NavItem eventKey={4} href="#">
							<Link to="/bio/resume"> Resume </Link>
						</NavItem>
					</Nav>
				</Navbar>

				<Route exact path="/bio/" component={AboutMe} />
				<Route exact path="/bio/books" component={Books} />
				<Route exact path="/bio/french" component={French} />
				<Route exact path="/bio/resume" component={Resume} />

			</div>
		);
	}
}

export default Bio;

