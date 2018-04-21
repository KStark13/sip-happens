import React from 'react';
import { Link } from "react-router-dom";

const Navbar = props => 
	<nav className="navbar navbar-default">
		<div className="container-fluid">
			<div className="navbar-header">
				<Link className="navbar-brand" to="/">
				Sip-Happens
				</Link>
			</div>
			<ul className="nav navbar-nav">
				{/*link in the navbar to the home page*/}
				<li className={window.location.pathname === "/home" ? "active"	: ""}>
				<Link to="/home">Home</Link>
				</li>

				{/*link in the navbar to the quiz*/}
				<li className={window.location.pathname === "/quiz" ? "active" : ""}>
				<Link to="/quiz">Quiz</Link>
				</li>

				{/*link in the navbar to the facts page*/}
				<li className={window.location.pathname === "/facts" ? "active" : ""}>
				<Link to="/facts">Facts</Link>
				</li>

				<li className={window.location.pathname === "/winelist" ? "active" : ""}>
				<Link to="/winelist">Wine List</Link>
				</li>
			</ul>
		</div> 
	</nav>

	export default Navbar;