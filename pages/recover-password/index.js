import { GoHomeButton, Navbar } from 'components';
import Image from 'next/image';
import loginImage1 from 'assets/login-1.png';
import loginLinea from 'assets/login-linea.png';

export default function RecoverPassword() {
  const labelStyles =
    'mb-2 sm:mb-[15px] label-name typo-body-2 sm:text-sm sm:tracking-wider sm:col-start-2 col-span-full text-text-1 lg:col-start-3 lg:col-span-4 xl:col-start-3';
  const inputStyles =
    'input-name bg-background-2 h-9 col-span-full rounded-md sm:rounded-[10px] sm:h-12 py-4 px-5 typo-body-1 sm:col-span-6 sm:col-start-2 xl:col-start-3 xl:col-span-8 lg:col-start-3 lg:col-span-4';

  return (
    <main className="px-[18px] md:px-10 overflow-clip lg:mb-6 lg:min-h-[628px] xl:p-0 xl:mb-0 min-h-screen">
      <Navbar className={'full-bleed-primary-blue xl:hidden'} />
      <section className="xl:flex max-h-screen">
        <div className="hidden min-h-screen xl:flex xl:w-[50%] xl:relative bg-primary-blue">
          <Image className="h-screen xl:w-[60%] xl:absolute xl:top-0 xl:left-0" src={loginLinea} />
          <Image
            className="xl:absolute xl:top-[50%] xl:translate-y-[-50%] xl:right-[-5px] xl:w-[82%]"
            src={loginImage1}
          />
        </div>
        <div className="xl:w-[50%] xl:relative overflow-auto scrollbar">
          <GoHomeButton>Go Home</GoHomeButton>
          <div className="min-w-[89%] esm:min-w-[90.5%] sm:min-w-[94.2%] md:min-w-[89.6%] absolute top-[50%] translate-y-[-50%] translate-x-[-50%] left-[50%] pt-0">
            <form className="grid-main gap-x-3">
              <h2
                className="text-center typo-heading-1 col-span-full mb-6 esm:mb-8 sm:mb-10"
                style={{ color: '#202324' }}
              >
                Reset password
              </h2>
              <label className={labelStyles}>Email</label>
              <input type="email" className={inputStyles} />
              <button class="col-span-full mt-5 sm:col-start-2 sm:col-span-6 sm:mt-[25px] md:col-start-2 md:col-span-6 xl:mt-6 lg:col-start-3 lg:col-span-4 bg-primary-blue text-white lg:h-[47px] px-[24px] py-[10px] rounded-full xl:col-start-3 xl:col-span-8">
                <div class="typo-body-1">Reset password</div>
              </button>
              <p className="text-center w-[30ch] m-auto col-span-full mt-[20px] typo-body-1 sm:mt-[25px] lg:pb-0">
                Enter your email address and we will send you a password reset link
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
