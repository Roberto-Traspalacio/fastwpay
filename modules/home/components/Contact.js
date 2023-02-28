import Image from 'next/image';
import location from 'assets/location-icon.svg';
import phone from 'assets/phone-icon.svg';
import email from 'assets/email-icon.svg';
import IntlMessages from 'utils/IntlMessages';

export default function contact({ className = '' }) {
  return (
    <div
      className={`${className} md:justify-between grid-main xl:flex xl:flex-col gap-x-3 justify-items-center pt-9 gap-y-8 xl:pt-0`}
    >
      <div className="hidden font-bold xl:block text-text-1 ">
        <IntlMessages id="landing.content.information" />
      </div>
      <div className="flex flex-col items-center col-span-2 col-start-1 sm:col-start-2 typo-body-1 xl:items-start">
        <Image className="mb-2 xl:hidden" src={phone} alt="Phone icon" />
        <div className="font-bold leading-[165%] text-color-2 text-text-2">
          <IntlMessages id="common.phone.number" />
        </div>
        <div className="text-color-2 leading-[165%] text-text-2 text-center">+34674397122</div>
      </div>
      <div className="typo-body-1 col-span-2 col-start-2 flex  flex-col items-center sm:col-start-4 xl:items-start pt-[2px] ">
        <Image className="mb-2 xl:hidden" src={location} alt="Phone icon" />
        <div className="font-bold leading-[165%] text-text-2 text-center">
          <IntlMessages id="common.address" />
        </div>
        <div className="text-text-2 leading-[165%] text-center sm:w-[130px] xl:text-left typo-body-1 xl:w-auto">
          Puerta del Angel <br className="xl:hidden" /> 28011 Madrid, España
        </div>
      </div>
      <div className="typo-body-1 flex flex-col col-span-2 col-start-3 row-start-1 sm:flex  sm:flex-col items-center xl:items-start sm:w-[150px] pt-[2px] sm:col-start-6">
        <Image className="mb-2 xl:hidden" quality={100} src={email} alt="Phone icon" />
        <div className="font-bold leading-[165%] text-text-2 text-center">
          <IntlMessages id="common.email" />
        </div>
        <div className="text-center content text-text-2 lh-165">
          info
          <br className="xl:hidden" />
          @fastwpay.com
        </div>
      </div>
    </div>
  );
}
