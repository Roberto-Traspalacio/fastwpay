import Image from 'next/image';
import logo from 'assets/logo.svg';
import IntlMessages from 'utils/IntlMessages';

export default function Footer() {
  return (
    <>
      <footer className="bg-primary-blue">
        <div className="typo-body-3 text-white flex flex-col items-center">
          <Image className="h-5 sm:h-6 w-auto my-3" src={logo} alt="Fastwpay logo"></Image>
          <p className="typo-body-3 text-white pb-3 sm:pb-[8px]">
            Copyright © 2023 Fastwpay, Inc |<IntlMessages id="common.all.rights.reserved" />
          </p>
        </div>
      </footer>
      <style jsx>{`
        div {
          box-shadow: 0 0 0 100vmax #295bb7;
          clip-path: inset(0 -100vmax) !important;
        }
      `}</style>
    </>
  );
}
