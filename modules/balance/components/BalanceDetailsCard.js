import IntlMessages from 'utils/IntlMessages';

export default function BalanceDetailsCard({ order, date, status, balance }) {
  const newDate = new Date(date);
  const day = newDate.getDate().toString().padStart(2, '0');
  const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
  const year = newDate.getFullYear().toString();
  const formattedDate = day + '/' + month + '/' + year;

  return (
    <>
      <div className="bg-background-2 px-[10px] pt-[18px] pb-[21px] rounded-lg flex flex-col sm:hidden">
        {/* Order */}
        <div className="flex justify-between">
          <p className="typo-heading-4 font-bold text-text-1">
            <IntlMessages id="common.order" />
          </p>
          <p className="typo-heading-4 text-text-2">#{order}</p>
        </div>
        {/* Data */}
        <div className="flex justify-between mt-6">
          <p className="typo-heading-4 font-bold text-text-1">
            <IntlMessages id="common.date" />
          </p>
          <p className="typo-heading-4 text-text-2">{formattedDate}</p>
        </div>
        {/* Status */}
        <div className="flex justify-between mt-6">
          <p className="typo-heading-4 font-bold text-text-1">
            <IntlMessages id="common.status" />
          </p>
          <p
            className={`typo-heading-4 ${
              status === 'Success'
                ? 'text-secondary-green'
                : status === 'Failed'
                ? 'text-secondary-red'
                : 'text-secondary-yellow'
            }`}
          >
            <IntlMessages id={`common.${status.replace(/\s+/g, '')}`} />
          </p>
        </div>
        {/* Balance */}
        <div className="flex justify-between mt-6">
          <p className="typo-heading-4 font-bold text-text-1">
            <IntlMessages id="common.balance" />
          </p>
          <p className="typo-heading-4 text-text-2">{balance} Є</p>
        </div>
      </div>
      <style jsx>{`
        .slice-text {
          width: 86%;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      `}</style>
    </>
  );
}
