import React from "react";
import Image from "next/image";

export default function FeatureItem({
	title,
	className = "",
	content,
	src = "null",
}) {
	return (
		<div className={`${className} flex flex-col items-center`}>
			<Image className='mb-4' src={src} alt='' />
			<div className='font-bold typo-heading-4 text-center'>{title}</div>
			<div className='bg-primary-blue w-14 h-[2px] my-4' />
			<div className='text-center typo-body-1 text-text-2 font-normal'>
				{content}
			</div>
		</div>
	);
}
