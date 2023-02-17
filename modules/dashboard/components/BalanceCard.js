import { UserContext } from 'context/user/context';
import { useContext } from 'react';
import IntlMessages from 'utils/IntlMessages';

export default function BalanceCard() {
  const { userInfo } = useContext(UserContext);

  function nextThursday() {
    const today = new Date();
    const currentDay = today.getDay();
    if (currentDay === 4) {
      return 'During the day';
    }
    const daysUntilThursday = (4 - currentDay + 7) % 7;
    const nextThursday = new Date(today.getTime() + daysUntilThursday * 24 * 60 * 60 * 1000);
    const month = (nextThursday.getMonth() + 1).toString().padStart(2, '0');
    const day = nextThursday.getDate().toString().padStart(2, '0');
    return `thursday ${day}/${month}`;
  }

  return (
    <div className="bg-background-5 col-span-full min-h-[139px] esm:min-h-[170px] pl-[18px] pb-3 rounded-[14px] relative overflow-hidden sm:min-h-[228px] md:col-span-6 lg:mt-[16px] max-h-0 lg:m-0 md:row-start-1 md:col-start-2">
      <div className="flex items-center gap-[5px] pt-6 esm:pt-[30px] esm:gap-[7px] lg:gap-[9px] xl:pt-[44px]">
        <div className="w-[10px] h-[10px] round-[1px] bg-white rotate-45"></div>
        <p className="text-white typo-heading-3 font-bold">
          <IntlMessages id="common.balance" />
        </p>
      </div>
      <p className="text-white typo-display-2 mt-[10px] font-bold">{userInfo?.balance} Є</p>
      <p className="typo-body-1 mt-[20px] text-white esm:mt-[34px] sm:mt-[44px] xl:mt-[34px]">
        <IntlMessages id="dashbard.balanceCard.text" /> {nextThursday()}
      </p>
      {/* Ellipse */}
      <div
        className="w-[160px] h-[150px] rounded-[50%] rotate-90 absolute right-[-76px] top-0 bottom-0 opacity-40 sm:w-[400px] sm:h-[380px] sm:right-[-240px]"
        style={{ background: 'rgba(248, 247, 247, 0.22)' }}
      ></div>
    </div>
  );
}
