import { useEffect, useState } from 'react';
import { Apikey } from 'services/Apikey.service';
import IntlMessages from 'utils/IntlMessages';
import BalanceCard from './BalanceCard';
import Column from './Column';

export default function ListBalance() {
  const [list, setList] = useState([]);
  const apiKey = new Apikey();
  const SUCCESS_REQUEST_CODE = 200;

  async function deleteApiKey(id) {
    await apiKey.deleteKey(id);
    const data = await apiKey.getBalanceList();
    if (data?.response.status === SUCCESS_REQUEST_CODE) {
      setList(data?.data?.items);
    }
  }

  useEffect(() => {
    (async () => {
      const data = await apiKey.getBalanceList();
      if (data?.response.status === SUCCESS_REQUEST_CODE) {
        setList(data?.data?.items);
      }
    })();
  }, []);

  return (
    <>
      <div className="pt-[38px] sm:pt-0 pb-5 flex flex-col gap-[18px] lg:pt-0">
        {list &&
          list.map((apiKey) => (
            <BalanceCard key={apiKey.id} id={apiKey.id} reference={apiKey.reference} balance={apiKey.balance} />
          ))}
        <div className="hidden sm:grid-main max-w-[100%] overflow-auto scrollbar">
          {/* Header */}
          <header className="col-span-full w-full mt-10 grid-main pb-[14px]">
            <h5 className="col-span-2 typo-heading-4 text-text-1 font-bold text-start lg:col-span-2">
              <IntlMessages id="common.reference" />
            </h5>
            <h5 className="col-span-2 typo-heading-4 text-text-1 font-bold text-center lg:col-span-2 lg:col-start-3">
              <IntlMessages id="common.balance" />
            </h5>
            <h5 className="justify-start col-span-3 col-start-6 md:col-span-2 md:col-start-7 typo-heading-4 text-text-1 font-bold text-start xl:col-span-3 xl:col-start-10">
              <IntlMessages id="common.actions" />
            </h5>
          </header>
          {/* List */}
          <div className="col-span-full">
            {list &&
              list.map((apiKey) => (
                <Column key={apiKey.id} id={apiKey.id} reference={apiKey.reference} balance={apiKey.balance} />
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
