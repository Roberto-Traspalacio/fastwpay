import React from 'react';
import Image from 'next/image';
import logo from '../assets/logo.svg';
import IntlMessages from 'utils/IntlMessages';

export default function Footer() {
  return (
    <footer className="bg-primary-blue">
      <div className="h-16 typo-body-3 text-white flex flex-col items-center">
        <Image className="h-5 sm:h-6 w-auto my-3 " src={logo}></Image>
        Copyright © 2022 Fastwpay, Inc |<IntlMessages id="common.all.rights.reserved" />
      </div>
    </footer>
  );
}
