import React from "react";

export default function Button({ className = "", children }) {
	return (
		<button
			className={`${className} bg-primary-blue text-white rounded-[20px] px-[24px] py-[10px]`}>
			<div className='typo-body-1'>{children}</div>
		</button>
	);
}
