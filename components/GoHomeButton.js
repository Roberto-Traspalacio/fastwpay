import Image from 'next/image';
import { useRouter } from 'next/router';
import arrowIcon from 'assets/arrow-icon.svg';

export default function GoHomeButton({ className = '', children, back }) {
  const { push } = useRouter();
  const handleClick = () => (back ? push('/login', '/login', { locale: router.locale }) : push('/'));

  return (
    <button
      onClick={handleClick}
      className={`${className} flex items-center gap-[14px] xsm:gap-[18px] esm:mt-[18px] cursor-pointer mt-[14px] sm:mt-[24px] sm:gap-[24px] lg:gap-[20px]  xl:gap-[24px] lg:ml-[40px]`}
    >
      <Image alt="Arrow left" src={arrowIcon} className={`typo-body-1 rotate-180`} />
      <p className="typo-body-1 text-primary-blue esm:text-sm sm:text-base">{children}</p>
    </button>
  );
}
