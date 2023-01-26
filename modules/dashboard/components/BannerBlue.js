import useDownloader from 'react-use-downloader';
import IntlMessages from 'utils/IntlMessages';

export default function BannerBlue({ className }) {
  const { download } = useDownloader();
  const fileUrl = "plugin/fastwpay-v0.1.0.zip";
  const filename = "fastwpay-v0.1.0.zip";
  return (
    <div
      className={`grid-main gap-x-3 col-span-full bg-background-2 py-[16px] h-[110px] mt-[10px] sm:mt-[32px] sm:rounded-2xl sm:min-h-[106px] md:flex md:items-center md:justify-center md:gap-[38px] md:py-4 md:h-auto md:min-h-0 lg:col-span-full ${className}`}
    >
      <h3 className="typo-body-1 text-center m-auto max-w-[32ch] col-span-full text-text-4 sm:max-w-none md:m-0">
        <IntlMessages id="dashboard.bannerBlue.text" />
      </h3>
      <button onClick={() => download(fileUrl, filename)} className="m-auto col-span-full flex items-center justify-center bg-primary-blue text-white py-[10px] px-[24px] h-[34px] rounded-full mt-3 sm:mt-[14px] sm:min-h-[38px] md:m-0">
        <p className="typo-body-1">
          <IntlMessages id="common.download" />
        </p>
      </button>
    </div>
  );
}
