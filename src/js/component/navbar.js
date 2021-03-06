import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<Link to="/personajes">
					<button className="btn btn-primary">Personajes</button>
				</Link>
				<Link to="/vehiculos">
					<button className="btn btn-primary">Vehiculos</button>
				</Link>
				<Link to="/planetas">
					<button className="btn btn-primary">Planetas</button>
				</Link>
			</div>
		</nav>
	);
};
