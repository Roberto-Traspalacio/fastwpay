import menuIcon from 'assets/menu.svg';
import Image from 'next/image';

export default function MenuButton({ openSidebar, setOpenSidebar }) {
  return (
    <div
      className="bg-primary-blue w-10 col-span-full h-10 mt-[10px] flex items-center justify-center rounded-r-[7px] sm:hidden"
      onClick={() => setOpenSidebar(!openSidebar)}
    >
      <Image src={menuIcon} alt="Hambuger menu white" className="w-[17px] h-[12px]" />
    </div>
  );
}
