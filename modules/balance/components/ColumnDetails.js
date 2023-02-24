import IntlMessages from 'utils/IntlMessages';

export default function ColumnDetails({ order, date, status, balance }) {
  const newDate = new Date(date);
  const day = newDate.getDate().toString().padStart(2, '0');
  const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
  const year = newDate.getFullYear().toString();
  const formattedDate = day + '/' + month + '/' + year;
  return (
    <>
      <div className="grid-main col-span-full border-t border-background-4 w-full overflow-auto">
        {/* Order */}
        <p className="col-span-2 pt-[29px] pb-[26px] typo-body-1 text-text-1">#{order}</p>
        {/* Date */}
        <p className="col-span-2 text-center pt-[29px] pb-[26px] typo-body-1 text-text-1">{formattedDate}</p>
        {/* Status */}
        <p
          className={`col-span-2 text-center pt-[29px] pb-[26px] typo-body-1 ${
            status === 'Success'
              ? 'text-secondary-green'
              : status === 'Failed'
              ? 'text-secondary-red'
              : 'text-secondary-yellow'
          }`}
        >
          <IntlMessages id={`common.${status.replace(/\s+/g, '')}`} />
        </p>
        {/* Balance */}
        <p className="col-span-3 col-start-6 md:col-span-2 text-center pt-[29px] pb-[26px] typo-body-1 text-text-1 xl:col-start-11">
          {balance} Є
        </p>
      </div>
      <style jsx>{`
        .slice-text {
          width: 99%;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      `}</style>
    </>
  );
}
