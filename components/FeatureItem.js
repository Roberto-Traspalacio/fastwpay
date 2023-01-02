import React from "react";
import Image from "next/image";

export default function FeatureItem({
	shadow,
	title,
	className = "",
	content,
	src = "null",
}) {
	return (
		<div className={`${className} flex flex-col items-center xl:items-start `}>
			<Image className={`mb-4 ${shadow} rounded-full`} src={src} alt='' />
			<div className='font-bold text-center typo-heading-4'>{title}</div>
			<div className='bg-primary-blue w-14 h-[2px] my-4' />
			<div className='font-normal text-center typo-body-1 text-text-2 xl:text-left'>
				{content}
			</div>
		</div>
	);
}
