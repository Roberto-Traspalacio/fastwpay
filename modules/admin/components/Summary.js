import Image from 'next/image';
import arrowDown from 'assets/polygon.svg';
import { useEffect, useState } from 'react';
import { Admin } from 'services/Admin.service';
import { SUCCESS_REQUEST_CODE } from 'utils/statusCodes';

const summaryInitialState = {
  profit: '0',
  total: '0',
  totalToPay: '0',
};

export default function Summary({ className, setList }) {
  const [openOptionList, setOpenOptionList] = useState(false);
  const [optionSelected, setOptionSelected] = useState('Only export data');
  const [summary, setSummary] = useState(summaryInitialState);
  const admin = new Admin();

  async function report(option) {
    const clean = option === 'Only export data' ? false : true;
    await admin.generateReport(clean);
    if (clean) {
      setList([]);
      setSummary(summaryInitialState);
    }
  }

  useEffect(() => {
    (async () => {
      const data = await admin.summary();
      if (data?.response.status === SUCCESS_REQUEST_CODE) {
        setSummary({ ...data?.data });
      }
    })();
  }, []);

  return (
    <>
      <div
        className={`${className} bg-background-2 pb-[18px] flex flex-col sm:mt-8 sm:mx-5 sm:rounded-2xl sm:pb-6 lg:flex-row lg:px-4 lg:py-[18px] lg:h-auto xl:px-8`}
      >
        <div className="flex flex-col">
          <h4 className="text-text-1 typo-heading-2 mt-[22px] text-center sm:mt-6 lg:text-start lg:mt-[4px]">
            Summary
          </h4>
          <p className="typo-body-2 text-text-2 text-center lg:text-start">November 17 to 23, 2022</p>
        </div>
        {/* Button */}
        <div className="button w-[181px] h-[34px] mt-[14px] bg-white rounded-[20px] pl-5 mx-auto relative flex items-center border-2 border-primary-blue sm:mt-5 sm:w-[212px] sm:h-[38px] lg:ml-6 lg:mt-3">
          <p className="text-primary-blue cursor-pointer typo-body-1" onClick={() => report(optionSelected)}>
            {optionSelected}
          </p>
          <Image
            onClick={() => setOpenOptionList(!openOptionList)}
            src={arrowDown}
            className="w-[12px] h-[10px] absolute right-5 cursor-pointer typo-body-1"
            alt="Arrow down"
          />
          {/* Options List */}
          {openOptionList && (
            <div className="w-[163px] border z-50 border-background-4 flex flex-col items-center absolute top-10 -left-1">
              <p
                className={`w-full text-center py-[7px] bg-white cursor-pointer ${
                  optionSelected === 'Only export data' ? 'text-text-4' : 'text-text-5'
                }`}
                onClick={() => {
                  setOptionSelected('Only export data');
                  setOpenOptionList(false);
                }}
              >
                Only export data
              </p>
              <hr />
              <p
                className={`w-full text-center py-[7px] bg-white cursor-pointer ${
                  optionSelected === 'Export & clean' ? 'text-text-4' : 'text-text-5'
                }`}
                onClick={() => {
                  setOptionSelected('Export & clean');
                  setOpenOptionList(false);
                }}
              >
                Export & clean
              </p>
            </div>
          )}
        </div>
        {/* Card  profit, pay & total */}
        <div className="col-span-full flex px-[18px] sm:px-0 justify-center lg:justify-end">
          <div className="card grid-main w-full col-span-full pt-[21px] mt-[22px] pb-[14px] bg-white rounded-lg sm:w-auto sm:mt-5 sm:flex sm:flex-row-reverse sm:px-[18px] sm:rounded-2xl sm:py-3 sm:mx-auto sm:gap-x-3 md:gap-x-8 lg:my-auto">
            <div className="flex col-span-full mx-auto gap-x-20 sm:row-reverse sm:gap-x-3 md:gap-x-8">
              {/* Profit */}
              <div className="col-span-2 flex flex-col items-center">
                <p className="profit text-text-1 typo-heading-3 font-normal">{summary.profit} Є</p>
                <p className="typo-body-2 text-text-5">Profit</p>
              </div>
              {/* Pay */}
              <div className="col-span-2 flex flex-col items-center">
                <p className="pay text-text-1 typo-heading-3 font-normal">{summary.totalToPay} Є</p>
                <p className="typo-body-2 text-text-5">Pay</p>
              </div>
            </div>
            {/* Total */}
            <div className="col-span-full flex flex-col items-center mx-auto mt-[20px] sm:m-0">
              <p className="text-text-1 typo-heading-3 font-normal">{summary.total} Є</p>
              <p className="typo-body-2 text-text-5">Total</p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .button::after {
          content: '';
          width: 2px;
          background: #295bb7;
          height: 32px;
          position: absolute;
          top: 0;
          right: 21.8%;
        }
        .card {
          box-shadow: 0px 0px 10px 0px #00000012;
        }
        .profit,
        .pay {
          position: relative;
        }
        .profit::after,
        .pay::after {
          content: '';
          width: 5px;
          height: 5px;
          background: #295bb7;
          box-shadow: 0px 0px 4px rgba(41, 91, 183, 0.8);
          position: absolute;
          top: 0;
          right: -5px;
          border-radius: 50%;
        }
        .pay::after {
          background: #e65c4f;
          box-shadow: 0px 0px 4px rgba(230, 92, 79, 0.8);
        }
        @media (min-width: 1024px) {
          .button::after {
            height: 34px;
          }
        }
      `}</style>
    </>
  );
}
