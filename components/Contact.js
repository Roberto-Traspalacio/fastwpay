import React from "react";
import Image from "next/image";
import location from "../assets/location-icon.svg";
import phone from "../assets/phone-icon.svg";
import email from "../assets/email-icon.svg";

export default function contact({ className = "" }) {
	return (
		<div
			className={`${className} sm:flex sm:justify-evenly md:justify-between grid-main gap-x-3 justify-items-center pt-9 gap-y-8 xl:flex-col xl:pt-0 `}
		>
			<div className='hidden xl:block font-bold text-text-1'>INFORMATION</div>
			<div className='typo-body-1 col-span-2 flex  flex-col items-center xl:items-start '>
				<Image className='mb-2 xl:hidden' src={phone} alt='Phone icon' />
				<div className='font-bold leading-[165%] text-color-2 text-text-2'>
					Phone number
				</div>
				<div className='text-color-2 leading-[165%] text-text-2 text-center'>
					+34674397122
				</div>
			</div>
			<div className='typo-body-1 col-span-2 col-start-2 flex  flex-col items-center xl:items-start pt-[2px] '>
				<Image className='mb-2 xl:hidden' src={location} alt='Phone icon' />
				<div className='font-bold leading-[165%] text-text-2 text-center'>
					Address
				</div>
				<div className='text-text-2 leading-[165%] text-center sm:w-[130px] xl:text-left typo-body-1 xl:w-auto'>
					Puerta del Angel <br /> 28011 Madrid, España
				</div>
			</div>
			<div className='typo-body-1 flex flex-col col-span-2 col-start-3 row-start-1 sm:flex  sm:flex-col items-center xl:items-start sm:w-[150px] pt-[2px]'>
				<Image
					className='mb-2 xl:hidden'
					quality={100}
					src={email}
					alt='Phone icon'
				/>
				<div className='font-bold leading-[165%] text-text-2 text-center'>
					Email
				</div>
				<div className='content text-text-2 lh-165 text-center'>
					info@fastwpay.com
				</div>
			</div>
		</div>
	);
}
