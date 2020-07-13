import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
	return (
		<header className="header">
			<Link className="title" to="/">React Movie App 2020</Link>
			<div className="nav">
				<Link to="/">home</Link>
				<Link to="/about">about</Link>
				<a href="https://github.com/mememamumo/react_app_2020" target="_blank" rel="noopener noreferrer">github</a>
			</div>
		</header>
	);
}

export default Navigation;