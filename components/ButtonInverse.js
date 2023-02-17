import Image from 'next/image';
import arrowIcon from 'assets/arrow-icon.svg';

export default function Button({ className = '', children, arrow }) {
  return (
    <button className={`${className} font-normal text-primary-blue ${!arrow && 'px-[20px]'} py-[7px]  `}>
      <div className="flex">
        <div className="text-center leading-[115%] min-w-[57px] typo-body-1">{children}</div>
        <Image src={arrowIcon} className={`typo-body-1 ml-6 ${!arrow && 'hidden'}`} />
      </div>
    </button>
  );
}
