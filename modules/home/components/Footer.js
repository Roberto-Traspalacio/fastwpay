import Image from 'next/image';
import logo from 'assets/logo.svg';
import IntlMessages from 'utils/IntlMessages';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer className="bg-primary-blue">
        <div className="flex justify-between px-[18px] py-5 md:px-10 xl:max-w-[1160px] xl:px-0 xl:mx-auto xl2:max-w-[1277px]">
          <div className="typo-body-3 text-white flex flex-col items-start">
            <Image
              className="w-[95px] object-cover mb-3 h-auto md:w-[152px] lg:w-[190px]"
              src={logo}
              alt="Fastwpay logo"
            />
            <p className="typo-body-3 text-white pb-3 max-w-[24ch] sm:pb-[8px] md:max-w-[56ch]">
              Copyright © 2023 Fastwpay, Inc |<IntlMessages id="common.all.rights.reserved" />
            </p>
          </div>
          <div className="flex flex-col text-white">
            <h3 className="typo-body-1 uppercase font-bold">Legal</h3>
            <Link href="/privacy-policy">
              <p className="typo-body-2 mt-1 font-normal underline">Privacy Policy</p>
            </Link>
          </div>
        </div>
      </footer>
      <style jsx>{`
        footer {
          box-shadow: 0 0 0 100vmax #295bb7;
          clip-path: inset(0 -100vmax) !important;
        }
      `}</style>
    </>
  );
}
