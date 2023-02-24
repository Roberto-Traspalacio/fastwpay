import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Apikey } from 'services/Apikey.service';
import IntlMessages from 'utils/IntlMessages';
import { SUCCESS_REQUEST_CODE } from 'utils/statusCodes';
import BalanceDetailsCard from './BalanceDetailsCard';
import ColumnDetails from './ColumnDetails';

export default function ListBalanceDetails() {
  const [list, setList] = useState([]);
  const apiKey = new Apikey();
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const data = router.query?.transactionId && (await apiKey.getTransactionsByApiKey(router.query?.transactionId));
      if (data?.response.status === SUCCESS_REQUEST_CODE) {
        setList(data?.data?.items);
      }
    })();
  }, [router.query]);

  return (
    <>
      <div className="pt-[38px] sm:pt-0 pb-5 flex flex-col gap-[18px] lg:pt-0">
        {list &&
          list.map((apiKey) => (
            <BalanceDetailsCard
              key={apiKey.id}
              order={apiKey?.id}
              date={apiKey?.created_at}
              status={apiKey?.status}
              balance={apiKey?.amount}
            />
          ))}
        <div className="hidden sm:grid-main max-w-[100%] overflow-auto scrollbar">
          {/* Header */}
          <header className="col-span-full w-full mt-10 grid-main pb-[14px]">
            {/* Order */}
            <h5 className="col-span-2 typo-heading-4 text-text-1 font-bold text-start">
              {/* <IntlMessages id="Order" /> */}
              Order
            </h5>
            {/* Date */}
            <h5 className="col-span-2 typo-heading-4 text-text-1 font-bold text-center">
              <IntlMessages id="common.date" />
            </h5>
            {/* Status */}
            <h5 className="col-span-2 typo-heading-4 text-text-1 font-bold text-center">
              <IntlMessages id="common.status" />
            </h5>
            {/* Balance */}
            <h5 className="col-span-3 col-start-6 md:col-span-2 typo-heading-4 text-text-1 font-bold text-center xl:col-start-11">
              <IntlMessages id="common.balance" />
            </h5>
          </header>
          {/* List */}
          <div className="col-span-full">
            {list &&
              list.map((apiKey) => (
                <ColumnDetails
                  key={apiKey.id}
                  order={apiKey?.id}
                  date={apiKey?.created_at}
                  status={apiKey?.status}
                  balance={apiKey?.amount}
                />
              ))}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .scrollbar::-webkit-scrollbar {
            width: 6px;
            height: 4px;
            border-radius: 4px;
          }
          .scrollbar::-webkit-scrollbar-track {
            border-radius: 100vh;
            background: #edf4ff;
            width: 6px;
          }
          .scrollbar::-webkit-scrollbar-thumb {
            background: #295bb7;
            border-radius: 100vh;
          }
        `}
      </style>
    </>
  );
}
