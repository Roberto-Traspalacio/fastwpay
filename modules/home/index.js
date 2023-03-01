import Head from 'next/head';

import Navbar from 'components/Navbar';
import Footer from 'modules/home/components/Footer';

import BannerWithBoy from './components/BannerWithBoy';
import HeaderSection from './components/HeaderSection';
import BanksSupportedSection from './components/BanksSupportedSection';
import SectionFeatures from './components/SectionFeatures';
import SectionActivateInstall from './components/SectionActivateInstall';
import SectionForm from './components/SectionForm';
import CountriesWork from './components/CountriesWork';

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
      <div className={'px-[18px] md:px-10 lg:px-0 overflow-hidden scroll-smooth'}>
        <HeaderSection />
        <BanksSupportedSection />
        <SectionFeatures />
        <SectionActivateInstall />
        <BannerWithBoy />
        <CountriesWork />
        <SectionForm />
      </div>
      <Footer />
    </>
  );
}
