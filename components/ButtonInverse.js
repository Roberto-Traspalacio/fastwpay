import React from "react";

export default function Button({ className = "", children }) {
	return (
		<button
			className={`${className} font-normal text-primary-blue  py-[7px] leading-[115%]`}>
			<div className='typo-body-1'>{children}</div>
		</button>
	);
}
