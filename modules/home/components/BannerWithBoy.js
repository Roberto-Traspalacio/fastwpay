import Link from 'next/link';
import Image from 'next/image';

import smile from 'assets/smile.png';

import IntlMessages from 'utils/IntlMessages';
import { Button } from 'components';
import { DOWNLOAD_PLUGIN_URL } from 'utils/common';

export default function BannerWithBoy() {
  return (
    <>
      <section className="full-bleed-section-banner bg-background-2 py-8 mt-12 relative sm:py-[61px] sm:mt-24 md:mt-[122px] md:py-[74px] lg:mt-[273px] lateral-padding xl:rounded-[60px] grid-main gap-y-6 xl:max-w-[1160px] xl2:max-w-[1277px] xl:mx-auto">
        <div className="col-span-full flex flex-col items-center gap-y-[18px] esm:gap-y-3 sm:items-start sm:col-span-6 sm:col-start-2 sm:gap-y-6 lg:col-start-5 lg:col-span-4 xl:col-start-7 xl:col-span-5">
          <div className="font-bold text-center typo-heading-1 sm:text-start xl:text-left lg:text-left">
            <IntlMessages id="landing.banner.title" />
          </div>
          <div className="typo-body-1 leading-[165%] text-center sm:text-justify text-text-2 col-span-full sm:col-span-6 sm:col-start-2 sm:mt-2 lg:col-start-5 xl:col-start-7 xl:col-span-5">
            <IntlMessages id="landing.banner.description" />
          </div>
          <Link href={DOWNLOAD_PLUGIN_URL}>
            <Button className="w-auto">
              <IntlMessages id="common.download" />
            </Button>
          </Link>
        </div>
        <div className="hidden absolute bottom-0 lg:flex xl:col-start-2">
          <Image src={smile} className="lg:ml-10 xl:ml-0" alt="Boy smiling" />
        </div>
      </section>
      <style jsx>
        {`
          .full-bleed-section-banner {
            box-shadow: 0 0 0 100vmax #f0f6ff;
            clip-path: inset(0 -100vmax);
          }
          @media (min-width: 1024px) {
            .lateral-padding {
              padding-left: 40px;
              padding-right: 40px;
            }
            .full-bleed-section-banner {
              box-shadow: none;
              clip-path: initial;
            }
          }
          @media (min-width: 1280px) {
            .lateral-padding {
              padding-left: 0;
              padding-right: 0;
            }
          }
        `}
      </style>
    </>
  );
}
