import React from "react";
import Image from "next/image";
import logo from "../assets/logo.svg";

export default function Navbar({ className }) {
	return (
		<nav
			className={`py-4 bg-primary-blue ${className} flex items-center justify-center`}
		>
			<Image className='h-[18px] sm:h-[24px] w-[auto]' src={logo}></Image>
		</nav>
	);
}
