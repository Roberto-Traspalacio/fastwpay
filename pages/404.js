import Image from 'next/image';
import { Button, Navbar } from 'components';
import notFound from 'assets/notFound.svg';

export default function Custom404() {
  return (
    <>
      <Navbar />
      <div style={{ background: '#F9FCFF' }} className="grid-main items-center content-main relative">
        <div className="hidden lg:flex items-center justify-center lg:col-span-3 lg:col-start-2 xl:col-span-6 xl:col-start-1">
          <Image className="w-full xl:h-[80vh]" src={notFound} alt="404" />
        </div>
        <div className="w-full flex flex-col justify-center items-center px-[18px] lg:col-span-4 lg:px-0 xl:col-start-8 xl:col-end-12">
          <h4 className="typo-display-1 font-medium text-text-1 text-center">404</h4>
          <h5 className="text-text-1 typo-display-2 text-center">Page Not Found</h5>
          <p className="text-center typo-body-1 text-text-2 max-w-[44ch]">
            We are sorry, the page you requested cannot be found. Please go back to home page
          </p>
          <Button className="w-[136px] mt-5 md:mt-6">Go Home</Button>
        </div>
      </div>
      <style jsx>{`
        .content-main {
          height: calc(100vh - 50px);
        }
        @media (min-width: 1024px) {
          .content-main {
            height: calc(100vh - 64px);
          }
        }
      `}</style>
    </>
  );
}
