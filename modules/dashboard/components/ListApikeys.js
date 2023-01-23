import { useEffect, useState } from 'react';
import { Apikey } from 'services/Apikey.service';
import IntlMessages from 'utils/IntlMessages';
import ApikeyCard from './ApikeyCard';
import ApikeyColumn from './ApikeyColumn';

export default function ListApikeys() {
  const [list, setList] = useState([]);
  const apiKey = new Apikey();
  const SUCCESS_REQUEST_CODE = 200;

  async function deleteApiKey(id) {
    await apiKey.deleteKey(id);
    const data = await apiKey.list();
    if (data?.response.status === SUCCESS_REQUEST_CODE) {
      setList(data?.data?.keys);
    }
  }

  useEffect(() => {
    (async () => {
      const data = await apiKey.list();
      if (data?.response.status === SUCCESS_REQUEST_CODE) {
        setList(data?.data?.keys);
      }
    })();
  }, []);

  return (
    <>
      <div className="pt-[18px] pb-5 flex flex-col gap-[18px] lg:pt-0">
        {list.map((apiKey) => (
          <ApikeyCard
            key={apiKey.id}
            reference={apiKey.reference}
            date={apiKey.createdAt}
            status={apiKey.status}
            apiKey={apiKey.key}
            id={apiKey.id}
            deleteApiKey={deleteApiKey}
            setList={setList}
          />
        ))}
        <div className="hidden sm:grid-main max-w-[100%] overflow-auto scrollbar">
          {/* Header */}
          <header className="col-span-full min-w-[874px] mt-10 grid-main pb-[14px]">
            <h5 className="col-span-1 typo-heading-4 text-text-1 font-bold text-start">
              <IntlMessages id="common.reference" />
            </h5>
            <h5 className="col-span-1 typo-heading-4 text-text-1 font-bold text-center xl:col-span-2 xl:col-start-3">
              <IntlMessages id="common.date" />
            </h5>
            <h5 className="col-span-1 typo-heading-4 text-text-1 font-bold text-center">
              <IntlMessages id="common.status" />
            </h5>
            <h5 className="col-span-2 typo-heading-4 text-text-1 font-bold text-center xl:col-span-3">
              <IntlMessages id="apiKey.title" />
            </h5>
            <h5 className="col-span-2 col-start-7 typo-heading-4 text-text-1 font-bold text-start xl:col-span-3 xl:col-start-10">
              <IntlMessages id="common.actions" />
            </h5>
          </header>
          {/* List */}
          <div className="col-span-full">
            {list.map((apiKey) => (
              <ApikeyColumn
                key={apiKey.id}
                reference={apiKey.reference}
                date={apiKey.createdAt}
                status={apiKey.status}
                apiKey={apiKey.key}
                id={apiKey.id}
                deleteApiKey={deleteApiKey}
                setList={setList}
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
