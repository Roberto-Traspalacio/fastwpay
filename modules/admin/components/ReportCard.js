export default function ReportCard({ email, total, profit, totalToPay }) {
  return (
    <div className="bg-background-2 flex flex-col gap-8 py-[18px] px-[10px] rounded-lg">
      <div className="flex justify-between items-center">
        <p className="typo-heading-4 text-text-1 font-bold">Account</p>
        <p className="typo-heading-4 text-text-2">{email}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="typo-heading-4 text-text-1 font-bold">Total</p>
        <p className="typo-heading-4 text-text-2">{total} Є</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="typo-heading-4 text-text-1 font-bold">Profit</p>
        <p className="typo-heading-4 text-primary-blue">{profit} Є</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="typo-heading-4 text-text-1 font-bold">Pay</p>
        <p className="typo-heading-4 text-secondary-red">{totalToPay} Є</p>
      </div>
    </div>
  );
}
