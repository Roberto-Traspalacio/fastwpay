import Head from 'next/head';
import Image from 'next/image';

import countries from 'assets/countries.svg';
import rectangle from 'assets/rectangle.svg';

import ButtonInverse from 'components/ButtonInverse';
import Navbar from 'components/Navbar';
import Footer from 'modules/home/components/Footer';
import IntlMessages from 'utils/IntlMessages';

import BannerWithBoy from './components/BannerWithBoy';
import HeaderSection from './components/HeaderSection';
import BanksSupportedSection from './components/BanksSupportedSection';
import SectionFeatures from './components/SectionFeatures';
import SectionActivateInstall from './components/SectionActivateInstall';
import SectionForm from './components/SectionForm';

export default function Home() {
  return (
    <>
      <Head>
        <title>FastwPay</title>
        <meta name="description" content="Get pay easy within wordpress" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className={'px-[18px] md:px-10 lg:px-0 overflow-hidden'}>
        <HeaderSection />
        <BanksSupportedSection />
        <SectionFeatures />
        <SectionActivateInstall />
        <BannerWithBoy />
        <section className="grid-main overflow-visible grid-cols-4 gap-x-3 sm:gap-y-6 mt-12 sm:mt-[120px] xl:mt-56 relative lg:mt-60 lg:mb-60">
          <Image
            className="absolute hidden col-span-4 col-start-1 row-span-3 row-start-1 xl:block -top-20 -left-20 "
            src={rectangle}
          />
          <div className="typo-heading-1 font-bold mt-[84px] mb-[12 px] sm:mb-0 sm:mt-0 col-span-full sm:col-span-4 sm:col-start-1 self-center top-line xl:col-start-4 xl:col-span xl:row-start-1 leading-[135%] before:left-0">
            <IntlMessages id="landing.section.five.title" />
          </div>
          <div className="typo-body-1 leading-[165%] col-span-full sm:col-span-4 sm:row-start-2 xl:col-start-4 xl:mb-0">
            <IntlMessages id="landing.section.five.description" />
            <span className="font-bold text-primary-blue"> Spain</span>,
            <span className="font-bold text-primary-blue"> Italy</span>,
            <span className="font-bold text-primary-blue"> France</span>, <IntlMessages id="common.or" />
            <span className="font-bold text-primary-blue"> Germany</span>.
          </div>
          <ButtonInverse arrow={true} className="col-span-2 row-start-3 text-left xl:col-start-4">
            <IntlMessages id="common.getStarted" />
          </ButtonInverse>
          <Image
            className="self-center col-span-full justify-self-center mt-11 sm:mt-0 sm:col-start-5 sm:col-span-4 sm:row-start-1 sm:row-span-4 xl:col-start-9 xl:scale-125 xl:row-span-3 xl:row-start-1 xl:-right-16 lg:absolute"
            src={countries}
            alt="image with spain france and germany orbitating"
          />
        </section>
        <SectionForm />
      </main>
      <Footer />
    </>
  );
}
