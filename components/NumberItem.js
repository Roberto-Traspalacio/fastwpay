import React from "react";

export default function NumberItem({ number, title, content, startCol = 2 }) {
	return (
		<div className={`col-span-full grid-main gap-y-2 gap-x-[18px]`}>
			<div
				className={`typo-number font-bold self-end leading-[100%] col-start-${startCol} col-span-1`}
			>
				{number}
			</div>
			<div
				className={`font-bold typo-number-title sm:col-start-${
					startCol + 1
				} col-span-5 self-end leading-[135%]`}
			>
				{title}
			</div>
			<div
				className={`typo-body-1 font-normal col-start-${
					startCol + 1
				} col-span-full mt-2 text-text-2`}
			>
				{content}
			</div>
		</div>
	);
}
