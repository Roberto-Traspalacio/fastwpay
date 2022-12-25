import React from "react";
import Image from "next/image";

export default function FeatureItem({
	title,
	className = "",
	src = "null",
	content = "lorem ipsum vainas y vergas",
}) {
	return (
		<div className={`${className} flex flex-col items-center`}>
			<Image className='mb-4' src={src} alt='' />
			<div className='typo-heading-4 font-bold'>{title}</div>
			<div className='bg-primary-blue w-14 h-[2px] my-4' />
			<div className='typo-body-1 text-text-2 text-center'>{content}</div>
		</div>
	);
}
