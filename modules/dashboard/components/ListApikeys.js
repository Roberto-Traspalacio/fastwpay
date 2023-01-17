import ApikeyCard from './ApikeyCard';
import ApikeyColumn from './ApikeyColumn';

export default function ListApikeys() {
  return (
    <div className="pt-[18px] pb-5 flex flex-col gap-[18px] lg:pt-0">
      <ApikeyCard />
      <ApikeyCard />
      <div className="hidden sm:grid-main max-w-[100%] overflow-auto">
        {/* Header */}
        <header className="col-span-full min-w-[874px] mt-10 grid-main pb-[14px]">
          <h5 className="col-span-1 typo-heading-4 text-text-1 font-bold text-start">Reference</h5>
          <h5 className="col-span-1 typo-heading-4 text-text-1 font-bold text-center xl:col-span-2 xl:col-start-3">Date</h5>
          <h5 className="col-span-1 typo-heading-4 text-text-1 font-bold text-center">Status</h5>
          <h5 className="col-span-2 typo-heading-4 text-text-1 font-bold text-center xl:col-span-3">
            API key
          </h5>
          <h5 className="col-span-2 col-start-7 typo-heading-4 text-text-1 font-bold text-start xl:col-span-3 xl:col-start-10">
            Actions
          </h5>
        </header>
        {/* List */}
        <ApikeyColumn />
        <ApikeyColumn />
        <ApikeyColumn />
      </div>
    </div>
  );
}
