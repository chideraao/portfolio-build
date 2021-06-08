import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";

function Header() {
	return (
		<div className="container flex">
			<div className="">
				<Link to="/">
					<span>
						<Logo />
					</span>
				</Link>
			</div>
			<div className="">
				<ul className="flex">
					<li>
						<Link to="/">Work</Link>
					</li>
					<li>
						<Link to="/">About</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Header;
