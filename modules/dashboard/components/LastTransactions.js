import { useEffect, useState } from 'react';
import { ButtonInverse } from 'components';
import Link from 'next/link';
import { Apikey } from 'services/Apikey.service';
import { LastTransactionsInterceptor } from 'interceptors/apikey.interceptor';

export default function LastTransactions() {
  const [lastTransactions, setLastTransactions] = useState([]);
  const apiKey = new Apikey();
  const SUCCESS_GET_LAST_TRANSACTIONS = 200;

  useEffect(() => {
    (async () => {
      const data = await apiKey.lastTransactions();
      if (data?.response?.status === SUCCESS_GET_LAST_TRANSACTIONS) {
        setLastTransactions(LastTransactionsInterceptor(data?.data));
      }
    })();
  }, []);

  return (
    <div className="hidden lg:flex lg:flex-col lg:col-span-3 lg:col-start-5 mt-8">
      <h3 className="typo-heading-4 font-medium ml-3 pb-[7px]">Last Transactions</h3>
      {/* List */}
      <ul className="">
        {lastTransactions?.length > 0 &&
          lastTransactions.map((transaction) => (
            <li
              key={transaction.key}
              className="grid grid-cols-4 items-center px-[10px] pb-[10px] pt-[14px] border-b border-background-4"
            >
              <p className="col-span-1 text-text-1 typo-boyd-1">{transaction.reference}</p>
              <p className="col-span-2 text-center text-text-1 typo-boyd-1">{transaction.createdAt}</p>
              <p className="col-span-1 text-secondary-green typo-boyd-1">{transaction.amount} Є</p>
            </li>
          ))}
      </ul>
      <Link href="/balance" className="mt-[11px] col-span-full flex justify-end pb-6">
        <ButtonInverse arrow>View more</ButtonInverse>
      </Link>
    </div>
  );
}
