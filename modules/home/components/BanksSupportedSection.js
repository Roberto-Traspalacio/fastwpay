import Image from 'next/image';

import hsbc from 'assets/hsbc-logo.svg';
import santander from 'assets/santander-logo.svg';
import bbva from 'assets/bbva-logo.svg';
import unicredit from 'assets/unicredit-logo.svg';
import societe from 'assets/societe-logo.svg';

import IntlMessages from 'utils/IntlMessages';

export default function BanksSupportedSection() {
  return (
    <section
      className="flex flex-col justify-center mt-[50px] sm:mt-[64px] lg:px-10 xl:px-0 xl:max-w-[1160px] xl:mx-auto xl2:max-w-[1277px]"
      id="Banks"
    >
      <div className="typo-body-1 text-primary-blue text-center sm:text-left mb-[12px]">
        <IntlMessages id="landing.supported.banks" />
      </div>
      <div className="full-bleed-bar bg-background-2 flex justify-evenly items-center h-10 esm:h-[70px] sm:h-[70px] not-full-bleed-bar md:justify-between xl:justify-evenly">
        <Image className="img-banks" src={santander} alt="santander logo" />
        <Image className="img-banks" src={hsbc} alt="hsbc bank logo" />
        <Image className="img-banks " src={bbva} alt="unicredit logo" />
        <Image className="hidden img-banks sm:block" src={unicredit} alt="bbva logo" />
        <Image className="hidden img-banks md:flex" src={societe} alt="bbva logo" />
      </div>
    </section>
  );
}
