import IntlMessages from 'utils/IntlMessages';
import FeatureItem from './FeatureItem';

import flagIcon from 'assets/flag-icon.svg';
import supportIcon from 'assets/support-icon.svg';
import walletIcon from 'assets/wallet-icon.svg';
import lockIcon from 'assets/lock-icon.svg';
import { ButtonInverse } from 'components';

export default function SectionFeatures() {
  return (
    <section className="section grid-main lg:px-10 xl:px-0 xl:max-w-[1160px] xl:mx-auto xl2:max-w-[1277px]">
      <h2 className="section-title typo-heading-1 top-line lg:text-start xl:max-w-[20ch] xl2:col-start-1">
        <IntlMessages id="landing.section.two.title" />
      </h2>

      <p className="typo-body-1 section-content sm:mt-6 sm:text-center lg:text-start xl2:col-start-1">
        <IntlMessages id="landing.section.two.description.1" />
        <span className="font-bold text-primary-blue">Woocommerce</span>,
        <IntlMessages id="landing.section.two.description.2" />
      </p>

      <ButtonInverse arrow={true} className="button-started arrow py-0 sm:mt-6 xl2:col-start-1">
        <IntlMessages id="common.getStarted" />
      </ButtonInverse>

      <div className="col-span-full mt-16 grid-main gap-y-[77px] sm:mt-[75px] sm:gap-y-[88px] lg:-mt-5 lg:col-start-5 lg:col-span-4 lg:row-start-1 lg:row-span-4 xl:col-start-7 xl:col-span-full xl2:col-start-8 xl2:col-span-5">
        <FeatureItem
          className="col-span-2 sm:col-start-2 lg:col-span-4 lg:col-start-1 xl:col-span-4"
          src={flagIcon}
          shadow="box-ether-blue"
          title={<IntlMessages id="landing.section.two.startNow.title" />}
          content={<IntlMessages id="landing.section.two.startNow.content" />}
        />

        <FeatureItem
          className="col-span-2 sm:col-start-6 lg:col-span-4 lg:col-start-5 xl:col-start-7 xl:col-span-4 xl2:col-start-8"
          src={lockIcon}
          shadow="box-ether-green"
          title={<IntlMessages id="landing.section.two.security.title" />}
          content={<IntlMessages id="landing.section.two.security.content" />}
        />

        <FeatureItem
          className="col-span-2 sm:col-start-2 lg:col-span-4 lg:col-start-1 xl:col-span-4"
          src={walletIcon}
          shadow="box-ether-yellow"
          title={<IntlMessages id="landing.section.two.adminPanel.title" />}
          content={<IntlMessages id="landing.section.two.adminPanel.content" />}
        />

        <FeatureItem
          className="col-span-2 sm:col-start-6 lg:col-span-4 md:col-start-6 xl:col-start-7 xl:col-span-4 xl2:col-start-8"
          // className="col-span-2 sm:col-start-2 lg:col-span-4 lg:col-start-1 xl:col-span-4"
          src={supportIcon}
          shadow="box-ether-red"
          title={<IntlMessages id="landing.section.two.support.title" />}
          content={<IntlMessages id="landing.section.two.support.content" />}
        />
      </div>
    </section>
  );
}
