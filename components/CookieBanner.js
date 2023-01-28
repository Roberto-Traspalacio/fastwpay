import Image from 'next/image';
import cookieIcon from 'assets/cookie.svg';

export default function CookieBanner({ acceptCookies }) {
  return (
    <>
      <div className="container w-full min-w-[100vw] h-screen fixed top-0 right-0 bottom-0 left-0 z-10">
        <div className="bg-background-1 grid-main px-[18px] py-8 fixed bottom-0 z-20 md:px-10 md:py-[33px] md:items-center xl:px-[60px]">
          <div className="col-span-full md:col-span-4 lg:col-span-5 xl:col-span-6">
            <div className="flex items-center">
              <Image className="md:w-10" src={cookieIcon} alt="Cookie" />{' '}
              <h3 className="ml-4 text-text-1 typo-heading-2 md:ml-[27px]">We use cookies</h3>
            </div>
            <p className="text-text-2 mt-5 typo-body-1 font-medium lg:mt-[14px]">
              We use cookies to improve your browsing experience on our website, to show you personalized content and to
              analyze traffic on our website. see <b className="underline">cookie policy</b>
            </p>
          </div>
          <div
            className={`grid-main mt-5 col-span-full md:col-span-2 md:col-start-7 md:mt-[61px] lg:mt-[23px] xl:col-start-9 xl:col-span-4`}
          >
            <button
              className="flex items-center justify-center h-[36px] rounded-[19px] typo-body-1 col-span-2 text-white bg-primary-blue md:col-span-full xl:col-span-6"
              onClick={acceptCookies}
            >
              Accept
            </button>
            <button
              className="flex items-center justify-center h-[36px] rounded-[19px] typo-body-1 col-span-2 text-primary-blue border border-primary-blue md:col-span-full md:mt-[10px] xl:col-span-6 xl:mt-0"
              onClick={acceptCookies}
            >
              Reject All
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          background-color: rgba(0, 0, 0, 0.4);
        }
      `}</style>
    </>
  );
}
