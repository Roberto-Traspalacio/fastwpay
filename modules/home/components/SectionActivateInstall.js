import Image from 'next/image';
import Link from 'next/link';

import laptop from 'assets/laptop.svg';
import pointing from 'assets/man-pointing.svg';

import { ButtonInverse } from 'components';
import IntlMessages from 'utils/IntlMessages';
import NumberItem from './NumberItem';
import { DOWNLOAD_PLUGIN_URL } from 'utils/common';

export default function SectionActivateInstall() {
  return (
    <>
      <section className="section mt-[98px] grid-main esm:mt-[110px] sm:mt-[90px] md:mt-[116px] lg:mt-0 xl:mb-60 lg:px-10 xl:px-0 xl:min-w-[1160px] xl:max-w-[1160px] xl:mx-auto xl2:min-w-[1277px] xl2:max-w-[1277px]">
        <div className="col-span-full grid-main lg:items-center content-height">
          <div className="col-span-full grid-main lg:col-span-3 items-center lg:row-start-1 lg:col-start-6 xl:row-start-1 xl:col-start-8 xl:col-span-5 xl2:h-auto">
            <h2 className="typo-heading-1 w-full section-title-inverse col-span-full sm:text-center top-line lg:col-span-full lg:text-start xl2:col-end-13 xl:max-w-[16ch]">
              <IntlMessages id="landing.section.three.title" />
            </h2>
            <p className="section-content-inverse typo-body-1 esm:mt-3 sm:mt-6 lg:col-span-full lg:text-start xl:row-start-2 xl2:col-end-13 xl:max-w-[40ch]">
              <IntlMessages id="landing.section.three.description" />
            </p>
            <Link
              href="/signup"
              className="button-started-inverse flex w-full sm:justify-center col-span-full lg:justify-start xl2:col-start-1 p-0 m-0"
            >
              <ButtonInverse
                arrow={true}
                className="button-started-inverse arrow md:mt-6 lg:col-span-full p-0 xl2:col-end-13"
              >
                <IntlMessages id="common.getStarted" />
              </ButtonInverse>
            </Link>
          </div>

          <Image
            className="-translate-x-5 mt-[35px] sm:-translate-x-11 col-span-full align-self-center img-laptop md:mt-0 lg:row-start-1 lg:row-span-4 lg:absolute lg:left-0 xl:-translate-x-36 xl:col-span-6"
            src={laptop}
            alt="laptop with screenshot"
          />
        </div>
        <p className=" hidden lg:block col-span-full text-center typo-heading-2 lg:mt-[30px]">
          <IntlMessages id="landing.rememberToInstallAndActivate" />{' '}
          <span className="text-primary-blue">woocommerce</span> <IntlMessages id="common.first" />
        </p>
        <div className="col-span-full grid-main overflow-hidden">
          <div className="flex flex-col mt-14 col-span-full gap-y-12 sm:mt-16 lg:row-start-6 lg:mt-[140px]">
            <NumberItem
              shifted={true}
              number={'01.'}
              title={<IntlMessages id="landing.section.four.1.title" />}
              content={[
                <span key="1" className="font-bold underline text-primary-blue">
                  <Link href={DOWNLOAD_PLUGIN_URL}>
                    <span className="cursor-pointer underline">
                      <IntlMessages id="common.downloadYou" />{' '}
                    </span>
                  </Link>
                </span>,
                <IntlMessages key="2" id="landing.section.four.1.description" />,
              ]}
            />
            <NumberItem
              startCol={1}
              number={'02.'}
              title={<IntlMessages id="landing.section.four.2.title" />}
              content={[
                <IntlMessages key="1" id="landing.section.four.2.1.description" />,
                <span key="2" className="font-bold text-primary-blue">
                  <IntlMessages id="common.pluginsTabs" />
                </span>,
                <IntlMessages key="3" id="landing.section.four.2.2.description" />,
                <span key="4" className="font-bold text-primary-blue">
                  <IntlMessages id="common.uploadPlugin" />
                </span>,
                <IntlMessages key="5" id="landing.section.four.2.3.description" />,
              ]}
            />

            <NumberItem
              shifted={true}
              startCol={2}
              number={'03.'}
              title={<IntlMessages id="landing.section.four.3.title" />}
              content={[
                <IntlMessages key="1" id="landing.section.four.3.1.description" />,
                <span key="2" className="font-bold text-primary-blue">
                  <IntlMessages id="common.settingsTab" />
                </span>,
                <IntlMessages key="3" id="landing.section.four.3.2.description" />,
              ]}
            />
          </div>
          <Image
            className="hidden img-finger lg:flex lg:absolute lg:mt-5 lg:-right-24 xl:translate-y-5 xl:translate-x-[120px] xl2:-mt-[2%]"
            src={pointing}
            alt="Boy with laptop and pointer with finger"
          />
        </div>
      </section>
      <style jsx>{`
        @media (min-width: 1024px) {
          .content-height {
            min-height: 691px;
          }
        }
        @media (min-width: 1281px) {
          .content-height {
            min-height: clamp(43.75rem, calc(-13.75rem + 71.88vw), 72.5rem);
            max-height: clamp(43.75rem, calc(-13.75rem + 71.88vw), 72.5rem);
          }
          .steps-margin {
            margin-top: clamp(8.88rem, calc(-0.87rem + 12.19vw), 13.75rem);
          }
        }
      `}</style>
    </>
  );
}
