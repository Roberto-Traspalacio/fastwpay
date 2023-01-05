import React from 'react';
import { Navbar, GoHomeButton } from 'components';
import Link from 'next/link';
import Image from 'next/image';
import loginImage1 from 'assets/login-1.png';
import loginLinea from 'assets/login-linea.png';

export default function Signup() {
  const [remember, setRemember] = React.useState(false);
  const labelStyles =
    'mb-2 sm:mb-[10px] label-name typo-body-2 sm:text-sm sm:tracking-wider sm:col-start-2 col-span-full text-text-1 lg:col-start-3 lg:col-span-4 xl:col-start-3';
  const inputStyles =
    'input-name bg-background-2 h-9 col-span-full rounded-md mb-[14px] esm:mb-[18px] sm:rounded-[10px] sm:mb-5 sm:h-12 py-4 px-5 typo-body-1 sm:col-span-6 sm:col-start-2 xl:col-start-3 xl:col-span-8 lg:col-start-3 lg:col-span-4';

  return (
    <main className="px-[18px] md:px-10 overflow-clip lg:mb-6 lg:min-h-[628px] xl:p-0 xl:mb-0 xl:min-h-screen">
      <Navbar className={'full-bleed-primary-blue xl:hidden'} />
      <section className="xl:flex">
        <div className="hidden min-h-screen xl:flex xl:w-[50%] xl:relative bg-primary-blue">
          <Image className="h-screen xl:w-[60%] xl:absolute xl:top-0 xl:left-0" src={loginLinea} />
          <Image
            className="xl:absolute xl:top-[50%] xl:translate-y-[-50%] xl:right-[-5px] xl:w-[82%]"
            src={loginImage1}
          />
        </div>
        <div className="flex flex-col xl:w-[50%] xl:max-h-screen overflow-auto">
          <GoHomeButton className="esm:mt-[18px]">Go Home</GoHomeButton>
          <div className="pt-[26px] esm:pt-[39px] sm:pt-[51px] lg:pt-[51px] xl:pb-[17px] xl:pt-[73px]">
            <form className="grid-main gap-x-3">
              <h2
                className="text-center typo-heading-1 col-span-full mb-6 esm:mb-8 sm:mb-10"
                style={{ color: '#202324' }}
              >
                Sign Up
              </h2>
              <label className={labelStyles}>Name</label>
              <input type="text" className={inputStyles} />
              <label className={labelStyles}>Last Name</label>
              <input type="text" className={inputStyles} />
              <label className={labelStyles}>Email</label>
              <input type="email" className={inputStyles} />
              <label className={labelStyles}>Password</label>
              <input type="password" className={inputStyles} />
              <label className={labelStyles}>Country</label>
              <select
                id="countries"
                class="bg-background-2 mb-[18px] col-span-full text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 sm:h-12 sm:col-span-6 sm:col-start-2 sm:mb-[26px] xl:col-start-3 xl:col-span-8 lg:col-start-3 lg:col-span-4"
              >
                <option selected>Choose a country</option>
                <option value="ES">España</option>
                <option value="IT">Italia</option>
                <option value="AL">Alemania</option>
                <option value="FR">Francia</option>
              </select>
              {/* Remember me and recover password */}
              <div className="col-span-full flex items-center justify-between sm:col-start-2 sm:col-end-8 lg:col-start-3 lg:col-span-4 xl:col-start-3 xl:col-span-8">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox cursor-pointer outline-none w-[18px] h-[18px] shadow-inner[box-shadow: 0px 0px 4px 0px #00000040 inset] text-gray-600"
                    checked={remember}
                    onChange={() => setRemember(!remember)}
                  />
                  <span className="ml-3 text-text-2 typo-body-1">
                    Accept the <span className="underline">privacy policy</span>?
                  </span>
                </label>
              </div>
              <button className="col-span-full mt-5 sm:col-start-2 sm:col-span-6 sm:mt-[25px] md:col-start-2 md:col-span-6 xl:mt-6 lg:col-start-3 lg:col-span-4 bg-primary-blue text-white lg:h-[47px] px-[24px] py-[10px] rounded-full xl:col-start-3 xl:col-span-8">
                <div className="typo-body-1">Sign Up</div>
              </button>
              <p className="text-center col-span-full mt-[18px] pb-28 typo-body-1 sm:mt-[25px] lg:pb-0">
                Do you already have an account with us?{' '}
                <Link href="/login">
                  <span className="text-primary-blue underline">Login</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
