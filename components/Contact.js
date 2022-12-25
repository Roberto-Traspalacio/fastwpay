import React from "react";
import Image from "next/image";
import location from "../assets/location-icon.svg";
import phone from "../assets/phone-icon.svg";
import email from "../assets/email-icon.svg";

export default function contact({ className }) {
	return (
		<div
			className={`${className} grid grid-cols-4 gap-x-3 justify-items-center mt-9 gap-y-8`}>
			<div className='typo-body-1 col-span-2 flex  flex-col items-center'>
				<Image className='mb-2' src={phone} alt='' />
				<div className='font-bold leading-[165%] text-color-2 text-text-2'>
					Phone number
				</div>
				<div className='text-color-2 leading-[165%] text-text-2'>
					+34 674 397 122
				</div>
			</div>
			<div className='typo-body-1 col-span-2 flex  flex-col items-center'>
				<Image className='mb-2' src={email} alt='' />
				<div className='font-bold leading-[165%] text-text-2'>Email</div>
				<div className='content text-text-2 lh-165'>info@fastwpay.com</div>
			</div>
			<div className='typo-body-1 col-span-2 col-start-2 flex  flex-col items-center'>
				<Image className='mb-2' src={location} alt='' />
				<div className='font-bold leading-[165%] text-text-2 '>Address</div>
				<div className='text-text-2 leading-[165%] text-center'>
					Puerta del Angel 28011 Madrid, España
				</div>
			</div>
		</div>
	);
}
