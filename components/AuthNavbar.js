import Image from 'next/image';
import mobileLogo from 'assets/mobile-logo.svg';

export default function AuthNavbar() {
  return (
    <nav className="h-12 border border-b-slate flex items-center justify-between px-[18px]">
      <Image src={mobileLogo} alt="Fastwpay logo" className="w-[34px] h-6" />
      <div>
        <p>
          <b className='typo-body-1'>Balance:</b> <span className='text-primary-blue typo-body-1'>203,876.34 Є</span>
        </p>
      </div>
    </nav>
  );
}
