import React from "react";

export default function NumberItem({ number, title, content, className }) {
	return (
		<div className={`${className}`}>
			<div className='typo-number font-bold self-end leading-[100%]'>
				{number}
			</div>
			<div className='font-bold typo-number-title col-start-2 col-span-full self-end leading-[135%]'>
				{title}
			</div>
			<div className={"typo-body-1 col-start-2 col-span-full mt-2 text-text-2"}>
				{content}
			</div>
		</div>
	);
}
