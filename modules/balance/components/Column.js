import IntlMessages from 'utils/IntlMessages';
import { useRouter } from 'next/router';

export default function Column({ id, reference, balance }) {
  const router = useRouter();
  const goToDetails = () => {
    router.push(`/balance/${id}?rfc=${reference}`);
  };
  return (
    <>
      <div className="grid-main col-span-full border-t border-background-4 w-full overflow-auto">
        {/* Reference */}
        <p className="col-span-2 pt-[29px] pb-[26px] typo-body-1 text-text-1">{reference}</p>
        {/* Balance */}
        <p className="col-span-2 text-center pt-[29px] pb-[26px] typo-body-1 text-text-1 lg:col-span-2 lg:col-start-3">
          {balance} Є
        </p>
        {/* Actions */}
        <div className="flex justify-start col-span-3 col-start-6 md:col-span-2 md:col-start-7 w-[100%] items-center xl:col-span-3 xl:col-start-10">
          <button
            className=" my-auto w-[145px] py-[10px] px-[9.5px] max-h-[38px] flex justify-center items-center border border-primary-blue text-primary-blue rounded-[17px] typo-body-1"
            onClick={goToDetails}
          >
            <IntlMessages id="common.viewDetails" />
          </button>
        </div>
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
