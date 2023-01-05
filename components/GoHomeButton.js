import Image from 'next/image';
import Link from 'next/link';
import arrowIcon from '/assets/arrow-icon.svg';

export default function GoHomeButton({ className = '', children }) {
  return (
    <Link href='/'>
      <button className={`${className} flex items-center gap-[14px] xsm:gap-[18px] cursor-pointer mt-[14px] sm:mt-[24px] sm:gap-[24px] lg:gap-[20px] xl:ml-[32px] xl:gap-[24px]`}>
        <Image src={arrowIcon} className={`typo-body-1 rotate-180`} />
        <p className="typo-body-1 text-primary-blue esm:text-sm sm:text-base">Go Home</p>
      </button>
    </Link>
  );
}
