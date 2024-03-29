export default function SummaryColumn({ email, total, profit, totalToPay }) {
  return (
    <div className="grid-main col-span-full border-t border-background-4 min-w-[874px] overflow-auto">
      {/* Account */}
      <p className="col-span-1 pt-[29px] pb-[26px] typo-body-1 text-text-1">{email}</p>
      {/* Total */}
      <p className="col-span-2 col-start-3 text-center pt-[29px] pb-[26px] typo-body-1 text-text-1 xl:col-span-2 lg:col-start-3 xl:col-start-7">
        {total} Є
      </p>
      {/* Profit */}
      <p className="col-span-2 text-center pt-[29px] pb-[26px] typo-body-1 font-medium text-primary-blue">{profit} Є</p>
      {/* Pay */}
      <p className="col-span-2 text-center pt-[29px] pb-[26px] typo-body-1 font-medium text-secondary-red">
        {totalToPay} Є
      </p>
    </div>
  );
}
