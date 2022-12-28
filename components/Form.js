import React from "react";
import Button from "./Button";

export default function Form() {
	return (
		<form className='grid-main bg-background-2 pt-14 gap-x-3 full-bleed-2'>
			<div className='typo-heading-1 font-bold col-span-full mb-6 text-center'>
				Get in touch with us
			</div>
			<div className='label-name typo-body-2 mb-2 md:col-start-2 col-span-full'>
				Name
			</div>
			<input
				type='text'
				className='input-name col-span-full md:col-span-6 rounded-md mb-[18px] py-4 px-5 typo-body-1 md:col-start-2'
			/>
			<div className='label-email typo-body-2 mb-2 md:col-start-2 col-span-full'>
				Email
			</div>
			<input
				type='text'
				className='input-email col-span-full rounded-md mb-[18px] py-4 px-5 typo-body-1 md:col-span-6 md:col-start-2'
			/>
			<div className='label-message typo-body-2 mb-2 md:col-start-2 col-span-full'>
				Message
			</div>
			<textarea
				type='text'
				className='input-message col-span-full mb-4 rounded-md py-4 px-5 typo-body-1 md:col-span-6 md:col-start-2'
			/>

			<Button className='col-span-full md:col-start-2 md:col-span-6'>
				Submit
			</Button>
		</form>
	);
}
