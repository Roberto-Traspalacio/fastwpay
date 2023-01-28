import { useState } from 'react';
import { Button, GoHomeButton, Navbar } from 'components';
import Image from 'next/image';
import checkIcon from 'assets/check.svg';
import loginImage1 from 'assets/login-1.png';
import loginLinea from 'assets/login-linea.png';
import { useRouter } from 'next/router';
import Loader from 'components/Loader';

export default function SuccessPswChange() {
  const [loading, setLoading] = useState();
  const router = useRouter();
  const goToLogin = () => {
    setLoading(true);
    router.push('/login');
  };
  return (
    <>
      <Navbar className={'full-bleed-primary-blue xl:hidden'} />
      <main className="px-[18px] md:px-10 overflow-clip xl:p-0 xl:mb-0 content-main">
        <section className="xl:flex max-h-screen">
          <div className="hidden min-h-screen xl:flex xl:w-[50%] xl:relative bg-primary-blue">
            <Image alt="White line" className="h-screen xl:w-[60%] xl:absolute xl:top-0 xl:left-0" src={loginLinea} />
            <Image
              alt="Dashboard Fastwpay"
              className="xl:absolute xl:top-[50%] xl:translate-y-[-50%] xl:right-[-5px] xl:w-[82%]"
              src={loginImage1}
            />
          </div>
          <div className="flex flex-col xl:w-[50%] xl:relative overflow-auto scrollbar">
            <GoHomeButton>Go Home</GoHomeButton>
            <div className="min-w-[89%] esm:min-w-[90.5%] sm:min-w-[94.2%] md:min-w-[89.6%] lg:w-[494px] absolute top-[50%] translate-y-[-50%] translate-x-[-50%] left-[50%] xl:min-w-[494px] pt-0">
              <div className="grid-main gap-x-3">
                <h2 className="typo-heading-1 text-center col-span-full max-w-[14ch] m-auto">
                  Password update successfully
                </h2>
                <Image
                  alt="Cancel icon"
                  width="80px"
                  height="80px"
                  className="m-auto mt-12 col-span-full w-[80px]"
                  src={checkIcon}
                />
                <Button
                  onClick={goToLogin}
                  className="flex items-center h-[38px] sm:h-[44px] lg:h-[47px] justify-center col-span-full sm:col-span-6 sm:col-start-2 lg:col-span-4 lg:col-start-3 xl:col-span-full mt-10"
                >
                  {loading ? <Loader /> : 'Go to login'}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <style jsx>{`
        .content-main {
          min-height: calc(100vh - 56px);
        }
        @media (min-width: 700px) {
          .content-main {
            min-height: calc(100vh - 64px);
          }
        }
      `}</style>
    </>
  );
}
