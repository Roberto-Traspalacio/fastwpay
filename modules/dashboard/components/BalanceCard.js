import { UserContext } from 'context/user/context';
import { useContext } from 'react';
import IntlMessages from 'utils/IntlMessages';

export default function BalanceCard() {
  const { userInfo } = useContext(UserContext);

  return (
    <div className="bg-background-5 col-span-full min-h-[139px] esm:min-h-[170px] pl-[18px] pb-3 rounded-[14px] relative overflow-hidden sm:min-h-[228px] md:col-span-6 lg:col-span-4 lg:mt-[16px] max-h-0 lg:m-0 lg:col-start-5 xl:col-start-9 md:row-start-1 md:col-start-2">
      <div className="flex items-center gap-[5px] pt-6 esm:pt-[30px] esm:gap-[7px] lg:gap-[9px] xl:pt-[44px]">
        <div className="w-[10px] h-[10px] round-[1px] bg-white rotate-45"></div>
        <p className="text-white typo-heading-3 font-bold">
          <IntlMessages id="common.balance" />
        </p>
      </div>
      <p className="text-white typo-display-2 mt-[10px] font-bold">{userInfo?.balance} Є</p>
      <p className="typo-body-1 mt-[20px] text-white esm:mt-[34px] sm:mt-[44px] xl:mt-[34px]">
        <IntlMessages id="dashbard.balanceCard.text" /> thursday 12/15
      </p>
      {/* Ellipse */}
      <div
        className="w-[160px] h-[150px] rounded-[50%] rotate-90 absolute right-[-76px] top-0 bottom-0 opacity-40 sm:w-[400px] sm:h-[380px] sm:right-[-240px]"
        style={{ background: 'rgba(248, 247, 247, 0.22)' }}
      ></div>
    </div>
  );
}
