import Image from 'next/image';
import Link from 'next/link';

import steps from 'assets/steps.svg';
import plugin from 'assets/plugin.svg';
import heroSmall from 'assets/hero-small.svg';
import heroLarge from 'assets/hero-large.svg';

import IntlMessages from 'utils/IntlMessages';
import { Button, ButtonInverse } from 'components';
import { DOWNLOAD_PLUGIN_URL } from 'utils/common';

export default function HeaderSection() {
  return (
    <section className="lg:px-10 xl:px-0 xl:max-w-[1160px] xl:mx-auto xl2:max-w-[1277px]">
      <div className="grid-main relative xl:min-h-[728px] auto-rows-min">
        <Image
          priority={true}
          className="mb-6 col-span-full xs:mb-4 esm:mb-4 sm:mb-[40px] justify-self-center w-[100%] h-[auto] lg:col-start-2 lg:col-end-8 xl:hidden"
          src={heroSmall}
          alt="Girl waving with payment messages around "
        />
        <Image
          priority={true}
          className="mb-6 xl:col-start-3 xl:col-span-8 xs:mb-4 sm:mb-[40px] w-[auto] h-[100%] hidden xl:block xl:top-[66px] absolute xl:row-span-3"
          src={heroLarge}
          alt="Girl waving with payment messages around "
        />

        <Image
          className="col-start-12 w-[76px] h-[56px] sm:w-[60px] sm:h-[76px] md:w-[100px] md:h-[132px] absolute top-[28px] sm:top-[32px] lg:top-[50px] xl:top-[89px] right-0"
          src={plugin}
          alt="Plugin"
        />

        <Image className="col-start-11 col-span-2 absolute hidden xl:block top-[368px]" src={steps} alt="Steps" />

        <h1 className="text-center leading-[120%] typo-display-2 col-span-full font-main text-text-1 sm:max-w-[26ch] sm:mx-auto sm:font-medium row-start-2 xl:col-span-4 xl:row-start-1 xl:z-10 xl:text-left xl:mt-[136px]">
          <IntlMessages id="landing.header.title" />
        </h1>
        <p className="typo-body-1 col-span-full text-center mt-[18px] sm:mt-[30px] text-text-2 leading-[165%] md:mt-[35px] md:max-w-[58ch] md:mx-auto lg:max-w-[78ch] xl:col-span-3 xl:col-start-1 xl:text-left">
          <IntlMessages id="landing.header.description" />
        </p>

        <div className="flex col-span-full justify-center items-center mt-[18px] sm:mt-[57px] sm:justify-center md:mt-8 xl:col-span-3 xl:col-start-1 xl:mt-8 xl:justify-start">
          <Link href={DOWNLOAD_PLUGIN_URL}>
            <Button className="block">
              <IntlMessages id="common.download" />
            </Button>
          </Link>
          <Link href="/#contact">
            <ButtonInverse>
              <IntlMessages id="common.contact" />
            </ButtonInverse>
          </Link>
        </div>
      </div>
    </section>
  );
}
