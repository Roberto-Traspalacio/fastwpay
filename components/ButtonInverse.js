import React from "react";
import Image from "next/image";
import arrowIcon from "../assets/arrow-icon.svg";

export default function Button({ className = "", children, arrow }) {
	return (
		<button
			className={`${className} font-normal text-primary-blue  py-[7px] leading-[115%]`}
		>
			<div className='flex'>
				<div className='typo-body-1 mr-3 text-center'>{children}</div>
				<Image
					src={arrowIcon}
					className={`typo-body-1 ${arrow ? "" : "hidden"}`}
				/>
			</div>
		</button>
	);
}
