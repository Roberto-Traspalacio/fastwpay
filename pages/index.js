import Head from "next/head";
import Image from "next/image";

import heroSmall from "../assets/hero-small.svg";
import hsbc from "../assets/hsbc-logo.svg";
import santander from "../assets/santander-logo.svg";
import bbva from "../assets/bbva-logo.svg";
import unicredit from "../assets/unicredit-logo.svg";
import societe from "../assets/societe-logo.svg";
import flagIcon from "../assets/flag-icon.svg";
import supportIcon from "../assets/support-icon.svg";
import walletIcon from "../assets/wallet-icon.svg";
import lockIcon from "../assets/lock-icon.svg";
import laptop from "../assets/laptop.svg";
import countries from "../assets/countries.svg";
import pointing from "../assets/man-pointing.png";

import Button from "../components/Button";
import ButtonInverse from "../components/ButtonInverse";
import FeatureItem from "../components/FeatureItem";
import NumberItem from "../components/NumberItem";
import Form from "../components/Form";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<>
			<Head>
				<title>FastwPay</title>
				<meta name='description' content='Get pay easy within wordpress' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={"px-[18px] md:px-10"}>
				<Navbar className={"full-bleed-primary-blue"} />
				<section className='grid grid-cols-4 gap-x-3 sm:grid-cols-8'>
					<Image
						className='mb-6 img-hero col-span-full xs:mb-4 sm:mb-[40px] justify-self-center w-[100%] h-[auto]'
						src={heroSmall}
						alt='Girl waving with payment messages around '
					/>
					<div className='text-center typo-display-2 col-span-full font-main text-text-1 sm:font-medium md:col-start-2 md:col-span-6'>
						Receive payments from your stores safely
					</div>
					<div className='col-span-full text-center mt-[18px] sm:mt-[30px] text-text-2 typo-body-1 leading-[165%]'>
						Implement a payment gateway for your online store. fast, safe and
						hassle-free. Start billing today without having any requirements.
					</div>

					<div className='flex col-span-full justify-evenly mt-[18px] sm:mt-[57px] sm:justify-center'>
						<Button>Download</Button>
						<ButtonInverse className='ml-5'>contact</ButtonInverse>
					</div>
				</section>
				<section
					className='flex flex-col justify-center mt-[50px] sm:mt-[64px]'
					id='Banks'
				>
					<div className='typo-body-1 text-primary-blue text-center sm:text-left mb-[12px]'>
						supported banks
					</div>
					<div className='full-bleed-2 bg-background-2 flex justify-evenly items-center h-10 sm:h-[70px]'>
						<Image className='img-banks' src={santander} alt='santander logo' />
						<Image className='img-banks' src={hsbc} alt='hsbc bank logo' />
						<Image className='img-banks' src={unicredit} alt='bbva logo' />
						<Image
							className='img-banks hidden sm:flex'
							src={bbva}
							alt='unicredit logo'
						/>
						<Image
							className='img-banks hidden md:flex'
							src={societe}
							alt='bbva logo'
						/>
					</div>
				</section>
				<section className='section'>
					<div className='section-title typo-heading-1 top-line '>
						The best payment solutions for you
					</div>
					<div className='typo-body-1 section-content'>
						Fastwpay is an exclusive payment gateway plugin for
						<span className='font-bold text-primary-blue'> Woocommerce</span>,
						made for all those entrepreneurs, startups and companies that would
						like to start charging for their online business without having to
						comply with all the bureaucracy involved in hiring any provider of
						this service.
					</div>

					<ButtonInverse arrow={true} className='button-started arrow'>
						Get started
					</ButtonInverse>

					<div className='lg:col-start-5 col-span-full lg:col-span-4 mt-16 grid-main mb-28 sm:mb-16 sm:gap-y-[88px] gap-y-[77px] lg:row-start-1 lg:row-span-4 lg:mt-0'>
						<FeatureItem
							className='sm:col-start-2 lg:col-span-4 lg:col-start-1 col-span-2'
							src={flagIcon}
							title={"Start now"}
							content={"You only need basic information."}
						/>
						<FeatureItem
							className='sm:col-start-6 lg:col-span-4 lg:col-start-5  col-span-2'
							src={lockIcon}
							title={"Security"}
							content={"Security system with high level of data encryption."}
						/>

						<FeatureItem
							className='sm:col-start-2 lg:col-span-4 lg:col-start-1  col-span-2'
							src={walletIcon}
							title={"Admin Panel"}
							content={
								"Manage your information and API keys from your account."
							}
						/>

						<FeatureItem
							className='sm:col-start-6 md:col-span-4 md:col-start-5  col-span-2'
							src={supportIcon}
							title={"Support"}
							content={"Contact us for information and usage support."}
						/>
					</div>
				</section>

				<section className='section'>
					<div className='typo-heading-1 section-title-inverse top-line lg:row-start-2'>
						How to install & activate
					</div>
					<div className='section-content-inverse typo-body-1 my-6 lg:row-start-3'>
						If it is the first time that you install a plugin for wordpress,
						then we explain in 3 simple steps how you can do it.
					</div>
					<ButtonInverse
						arrow={true}
						className='button-started-inverse arrow lg:row-start-4'
					>
						Get started
					</ButtonInverse>

					<Image
						className='-translate-x-5 sm:-translate-x-11 col-span-full align-self-center img-laptop lg:row-span-5 lg:row-start-1 lg:col-span-4'
						src={laptop}
						alt='laptop with screenshot'
					/>

					<div className='flex flex-col mt-14 col-span-full gap-y-12 lg:row-start-6'>
						<NumberItem
							shifted={true}
							number={"01."}
							title={"Download the file"}
							content={[
								<span className='font-bold underline text-primary-blue'>
									<a href='#'>Download </a>
								</span>,
								"the fastwpay.zip file on your computer.",
							]}
						/>
						<NumberItem
							startCol={1}
							number={"02."}
							title={"Upload the plugin in wordpress"}
							content={[
								"In the WordPress panel of your store website, go to the ",
								<span className='font-bold text-primary-blue'>
									plugins tab
								</span>,
								", press the ",
								<span className='font-bold text-primary-blue'>
									upload plugin
								</span>,
								" button and upload the fastwpay.zip file.",
							]}
						/>

						<NumberItem
							shifted={true}
							startCol={2}
							number={"03."}
							title={"Insert the api key"}
							content={[
								"To activate, create an API key in your Fastwpay account and copy it. Then go to the ",
								<span className='font-bold text-primary-blue'>
									settings tab
								</span>,
								" in your Wordpress panel of your store, paste in the API key field and save the changes.",
							]}
						/>
					</div>
					<Image
						className='col-start-5 col-span-4 row-start-6 hidden lg:inline lg:translate-x-10'
						src={pointing}
					/>
				</section>
				<section className=' bg-background-2 full-bleed-2 mt-12 pt-8 grid-main pb-8 gap-y-6'>
					<div className='typo-heading-1 font-bold text-center  col-span-full'>
						Free to install & use
					</div>
					<div className='typo-body-1 leading-[165%] text-center sm:text-justify text-text-2 col-span-full sm:col-span-6 sm:col-start-2'>
						To use it you don't need to buy it, it's completely free, and you
						can use it in all the online stores you want. Fastwpay only charges
						a small commission of 1.5% per purchase made.
					</div>
					<Button className='self-center col-span-2 col-start-2 '>
						Download
					</Button>
				</section>
				<section className='grid-main grid-cols-4 gap-x-3 sm:gap-y-6 mt-12 sm:mt-[120px]'>
					<div className='typo-heading-1 font-bold mt-[84px] mb-[12 px] sm:mb-0 sm:mt-0 col-span-full sm:col-span-4 sm:col-start-1 self-center'>
						Countries where it works
					</div>
					<div className='typo-body-1 leading-[165%] mb-[18px] col-span-full sm:col-span-4'>
						To have an account in Fastwpay, the bank account of the owner of the
						online store must be located in
						<span className='font-bold text-primary-blue'> Spain</span>,
						<span className='font-bold text-primary-blue'> France</span>, or
						<span className='font-bold text-primary-blue'> Germany</span>.
					</div>
					<ButtonInverse
						arrow={true}
						className='col-span-2 text-left row-start-3'
					>
						Get started
					</ButtonInverse>
					<Image
						className='sm:overflow-hidden col-span-full justify-self-center mt-11 sm:mt-0 sm:col-start-5 sm:col-span-4 sm:row-start-1 sm:row-span-3 self-center'
						src={countries}
						alt='image with spain france and germany orbitating'
					/>
				</section>
				<section className='mt-20'>
					<Form />
					<Contact className='pb-8' />
				</section>
				<Footer />
			</main>
		</>
	);
}
