import { Button, GoHomeButton, Navbar } from 'components';
import Image from 'next/image';
import checkIcon from 'assets/check.svg';
import loginImage1 from 'assets/login-1.png';
import loginLinea from 'assets/login-linea.png';
import { useRouter } from 'next/router';

export default function SuccessPswChange() {
  const router = useRouter();
  return (
    <>
      <Navbar className={'full-bleed-primary-blue xl:hidden'} />
      <main className="px-[18px] md:px-10 overflow-clip lg:mb-6 xl:p-0 xl:mb-0 min-h-screen">
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
                <h2 className="typo-heading-1 text-center col-span-full max-w-[14ch] m-auto">Password update error</h2>
                <Image
                  alt="Cancel icon"
                  width="80px"
                  height="80px"
                  className="m-auto mt-12 col-span-full w-[80px]"
                  src={checkIcon}
                />
                <Button
                  onClick={() => router.push('/login')}
                  className="col-span-full sm:col-span-6 sm:col-start-2 lg:col-span-4 lg:col-start-3 xl:col-span-full mt-10 sm:h-[47px]"
                >
                  Go to login
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
