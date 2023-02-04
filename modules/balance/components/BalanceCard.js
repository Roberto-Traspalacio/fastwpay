import { useRouter } from 'next/router';
import IntlMessages from 'utils/IntlMessages';

export default function BalanceCard({ id, reference, balance }) {
  const router = useRouter();
  const goToDetails = () => {
    router.push(`/balance/${id}`);
  };
  return (
    <>
      <div className="bg-background-2 px-[10px] pt-[18px] pb-[21px] rounded-lg flex flex-col sm:hidden">
        {/* Reference */}
        <div className="flex justify-between">
          <p className="typo-heading-4 font-bold text-text-1">Reference</p>
          <p className="typo-heading-4 text-text-2">{reference}</p>
        </div>
        {/* Balance */}
        <div className="flex justify-between mt-6">
          <p className="typo-heading-4 font-bold text-text-1">Balance</p>
          <p className="typo-heading-4 text-text-2">{balance}</p>
        </div>
        {/* Actions */}
        <div className="flex justify-between mt-6">
          <p className="typo-heading-4 font-bold text-text-1">
            <IntlMessages id="common.action" />
          </p>
          <div className="flex gap-[8px]">
            <button
              className="py-[6px] px-[13.5px] w-[102px] max-h-[28px] flex justify-center items-center border border-primary-blue typo-body-1 text-primary-blue rounded-[17px] font-normal"
              onClick={goToDetails}
            >
              <IntlMessages id="View Details" />
            </button>
          </div>
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
