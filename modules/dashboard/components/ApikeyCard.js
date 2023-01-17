import contentCopyItem from 'assets/content_copy.svg';

export default function ApikeyCard() {
  return (
    <div className="bg-background-2 px-[10px] pt-[18px] pb-[23px] rounded-lg flex flex-col sm:hidden">
      <div className="flex justify-between">
        <p className="typo-heading-4 font-bold text-text-1">Reference</p>
        <p className="typo-heading-4 text-text-2">Casas Win</p>
      </div>
      <div className="flex justify-between mt-8">
        <p className="typo-heading-4 font-bold text-text-1">Date</p>
        <p className="typo-heading-4 text-text-2">11/04/2022</p>
      </div>
      <div className="flex justify-between mt-8">
        <p className="typo-heading-4 font-bold text-text-1">Status</p>
        <p className="typo-heading-4 text-text-2 font-medium" style={{ color: '#1FB81F' }}>
          Active
        </p>
      </div>
      <div className="flex justify-between items-center mt-8">
        <p className="typo-heading-4 font-bold text-text-1">API key</p>
        <div className='flex items-center justify-between w-[180px] esm:w-[230px] bg-white rounded-lg px-3 py-[11px]'>
          <p className="typo-body-1 text-text-2">2hnd864hkm947bdn</p>
          <svg className='cursor-pointer' width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.75 15.499C1.3375 15.499 0.98425 15.3523 0.69025 15.0588C0.39675 14.7648 0.25 14.4115 0.25 13.999V3.49902H1.75V13.999H10V15.499H1.75ZM4.75 12.499C4.3375 12.499 3.9845 12.3523 3.691 12.0588C3.397 11.7648 3.25 11.4115 3.25 10.999V1.99902C3.25 1.58652 3.397 1.23327 3.691 0.939273C3.9845 0.645773 4.3375 0.499023 4.75 0.499023H11.5C11.9125 0.499023 12.2658 0.645773 12.5598 0.939273C12.8533 1.23327 13 1.58652 13 1.99902V10.999C13 11.4115 12.8533 11.7648 12.5598 12.0588C12.2658 12.3523 11.9125 12.499 11.5 12.499H4.75ZM4.75 10.999H11.5V1.99902H4.75V10.999Z"
              fill="#706666"
            />
          </svg>
        </div>
      </div>
      <div className="flex justify-between mt-8">
        <p className="typo-heading-4 font-bold text-text-1">Action</p>
        <div className='flex gap-[8px]'>
          <button className='py-[6px] px-[13.5px] w-[96px] max-h-[28px] flex justify-center items-center bg-primary-blue text-white rounded-[17px] typo-heading-4'>Deactivate</button>
          <button className='py-[6px] px-[13.5px] w-[96px] max-h-[28px] flex justify-center items-center border border-primary-blue text-primary-blue rounded-[17px] typo-heading-4'>Delete</button>
        </div>
      </div>
    </div>
  );
}
