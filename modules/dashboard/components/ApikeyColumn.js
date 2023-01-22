import { useRef } from 'react';
import IntlMessages from 'utils/IntlMessages';

export default function ApikeyColumn({ reference, date, status, apiKey }) {
  const apiKeyRef = useRef();

  function copy(ref) {
    let text = ref.current;
    text.select();
    text.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(text.value);
  }

  return (
    <div className="grid-main col-span-full border-t border-background-4 min-w-[874px] overflow-auto">
      {/* Reference */}
      <p className="col-span-1 pt-[29px] pb-[26px] typo-body-1 text-text-1">{reference}</p>
      {/* Date */}
      <p className="col-span-1 text-center pt-[29px] pb-[26px] typo-body-1 text-text-1 xl:col-span-2 xl:col-start-3">
        {date}
      </p>
      {/* Status */}
      <p className="col-span-1 text-center pt-[29px] pb-[26px] typo-body-1 font-medium" style={{ color: '#1FB81F' }}>
        {status}
      </p>
      {/* API key */}
      <div className="col-span-2 text-center flex justify-center pt-[29px] pb-[26px] xl:col-span-3">
        <div
          className="col-span-full w-[100%] h-[38px] rounded-[10px] flex gap-[5px] pr-[16px] items-center justify-around"
          style={{ background: '#EEF2F5' }}
        >
          <p className="">
            <input
              disabled
              className="pl-4 w-[100%] typo-body-1 text-text-2"
              type="text"
              // disabled
              ref={apiKeyRef}
              value={apiKey}
            />
          </p>
          <svg
            onClick={() => copy(apiKeyRef)}
            className="cursor-pointer"
            width="13"
            height="16"
            viewBox="0 0 13 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.75 15.499C1.3375 15.499 0.98425 15.3523 0.69025 15.0588C0.39675 14.7648 0.25 14.4115 0.25 13.999V3.49902H1.75V13.999H10V15.499H1.75ZM4.75 12.499C4.3375 12.499 3.9845 12.3523 3.691 12.0588C3.397 11.7648 3.25 11.4115 3.25 10.999V1.99902C3.25 1.58652 3.397 1.23327 3.691 0.939273C3.9845 0.645773 4.3375 0.499023 4.75 0.499023H11.5C11.9125 0.499023 12.2658 0.645773 12.5598 0.939273C12.8533 1.23327 13 1.58652 13 1.99902V10.999C13 11.4115 12.8533 11.7648 12.5598 12.0588C12.2658 12.3523 11.9125 12.499 11.5 12.499H4.75ZM4.75 10.999H11.5V1.99902H4.75V10.999Z"
              fill="#706666"
            />
          </svg>
        </div>
      </div>
      {/* Actions */}
      <div className="flex justify-between col-span-2 col-start-7 w-[100%] xl:col-span-3 xl:col-start-10">
        <button className=" my-auto w-[47%] py-[10px] px-[9.5px] max-h-[38px] flex justify-center items-center bg-primary-blue text-white rounded-[17px] typo-body-1 ">
          <IntlMessages id="common.deactivate" />
        </button>
        <button className=" my-auto w-[47%] py-[10px] px-[9.5px] max-h-[38px] flex justify-center items-center border border-primary-blue text-primary-blue rounded-[17px] typo-body-1 ">
          <IntlMessages id="common.delete" />
        </button>
      </div>
    </div>
  );
}
