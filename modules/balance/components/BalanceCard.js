import { useRouter } from 'next/router';
import IntlMessages from 'utils/IntlMessages';

export default function BalanceCard({ id, reference, balance }) {
  const { push } = useRouter();
  const DETAILS_URL = `/balance/${id}?rfc=${reference}`;

  return (
    <div className="bg-background-2 px-[10px] pt-[18px] pb-[21px] rounded-lg flex flex-col sm:hidden">
      {/* Reference */}
      <div className="flex justify-between">
        <p className="typo-heading-4 font-bold text-text-1">
          <IntlMessages id="common.reference" />
        </p>
        <p className="typo-heading-4 text-text-2">{reference}</p>
      </div>
      {/* Balance */}
      <div className="flex justify-between mt-6">
        <p className="typo-heading-4 font-bold text-text-1">
          <IntlMessages id="common.balance" />
        </p>
        <p className="typo-heading-4 text-text-2">{balance}</p>
      </div>
      {/* Actions */}
      <div className="flex justify-between mt-6">
        <p className="typo-heading-4 font-bold text-text-1">
          <IntlMessages id="common.action" />
        </p>
        <div className="flex gap-[8px]">
          <button
            className="py-[6px] px-[13.5px] max-h-[28px] flex justify-center items-center border border-primary-blue typo-body-1 text-primary-blue rounded-[17px] font-normal"
            onClick={() => push(DETAILS_URL)}
          >
            {/* <IntlMessages id="View Details" /> */}
            <IntlMessages id="common.viewDetails" />
          </button>
        </div>
      </div>
    </div>
  );
}
