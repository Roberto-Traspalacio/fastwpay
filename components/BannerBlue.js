import Link from 'next/link';
import IntlMessages from 'utils/IntlMessages';
import { DOWNLOAD_PLUGIN_URL } from 'utils/common';

export default function BannerBlue({ className }) {
  return (
    <div
      className={`grid-main gap-x-3 col-span-full bg-background-2 py-[16px] mt-[10px] sm:mt-[32px] sm:rounded-2xl sm:min-h-[106px] md:flex md:items-center md:justify-center md:gap-[38px] md:py-4 md:h-auto md:min-h-0 lg:col-span-full ${className}`}
    >
      <h3 className="typo-body-1 text-center m-auto max-w-[32ch] col-span-full text-text-4 sm:max-w-none md:m-0">
        <IntlMessages id="dashboard.bannerBlue.text" />
      </h3>
      <Link className="col-span-full" href={DOWNLOAD_PLUGIN_URL}>
        <button className="m-auto flex items-center justify-center bg-primary-blue text-white py-[10px] px-[24px] h-[34px] rounded-full mt-3 sm:mt-[14px] sm:min-h-[38px] md:m-0">
          <p className="typo-body-1">
            <IntlMessages id="common.download" />
          </p>
        </button>
      </Link>
    </div>
  );
}
