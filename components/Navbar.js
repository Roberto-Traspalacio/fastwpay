import React from "react";
import Image from "next/image";
import logo from "../assets/logo.svg";

export default function Navbar({ className }) {
	return (
		<nav
			className={`h-12 bg-primary-blue ${className} flex items-center justify-center`}
		>
			<Image className='' src={logo}></Image>
		</nav>
	);
}
