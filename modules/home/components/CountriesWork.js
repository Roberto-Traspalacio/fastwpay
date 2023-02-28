import Image from 'next/image';

import countries from 'assets/countries.svg';
import rectangle from 'assets/rectangle.svg';

import { ButtonInverse } from 'components';
import IntlMessages from 'utils/IntlMessages';

export default function CountriesWork() {
  return (
    <section className="grid-main overflow-visible grid-cols-4 gap-x-3 mt-[84px] esm:mt-[60px] sm:gap-y-6 sm:mt-[120px] xl:mt-56 lg:mt-[200px] lg:mb-60 lg:px-10 xl:px-0 xl:max-w-[1160px] xl:mx-auto xl2:max-w-[1277px] xl2:mt-[316px]">
      <Image
        className="absolute hidden rectangle col-span-4 col-start-1 row-span-3 row-start-1 lg:block -mt-20 -left-48 xl:-left-24 xl2:-left-[150px] xl2:-mt-16"
        alt="Rectangle blue"
        src={rectangle}
      />
      <h2 className="typo-heading-1 font-bold mb-[12 px] sm:mb-0 sm:mt-0 col-span-full leading-[135%] before:left-0 sm:col-span-4 sm:col-start-1 self-center top-line lg:col-start-3 lg:col-span-3 xl:col-start-4 xl:col-span-4 xl:max-w-[15ch] xl:row-start-1 xl2:col-start-3">
        <IntlMessages id="landing.section.five.title" />
      </h2>
      <p className="typo-body-1 leading-[165%] col-span-full sm:col-span-4 mt-[18px] esm:mt-3 sm:row-start-2 lg:col-start-3 lg:col-span-3 lg:text-justify xl:col-start-4 xl:col-span-4 xl:max-w-[44ch] xl:mb-0 xl2:col-start-3 xl2:col-span-5 xl2:max-w-[64ch]">
        <IntlMessages id="landing.section.five.description" />
        <span className="font-bold text-primary-blue"> Spain</span>,
        <span className="font-bold text-primary-blue"> Italy</span>,
        <span className="font-bold text-primary-blue"> France</span>, <IntlMessages id="common.or" />
        <span className="font-bold text-primary-blue"> Germany</span>.
      </p>
      <ButtonInverse
        arrow={true}
        className="col-span-2 row-start-3 text-left mt-[18px] esm:mt-3 lg:col-start-3 xl:col-start-4 xl2:col-start-3"
      >
        <IntlMessages id="common.getStarted" />
      </ButtonInverse>
      <Image
        className="self-center img-countries col-span-full justify-self-center mt-11 esm:mt-9 sm:mt-0 sm:ml-[120px] sm:col-start-5 sm:col-span-4 sm:row-start-1 sm:row-span-4 md:ml-[190px] lg:absolute lg:-right-14 xl:col-start-9 xl:scale-125 xl:row-span-3 xl:row-start-1 xl:right-0 xxl:translate-y-28"
        src={countries}
        alt="image with spain france and germany orbitating"
      />
    </section>
  );
}
