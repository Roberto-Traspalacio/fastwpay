export default function NumberItem({ number, title, content, shifted }) {
  return (
    <div className={`col-span-full grid-main gap-y-2 gap-x-[18px] `}>
      <div
        className={`typo-number font-bold self-end leading-[100%] ${
          shifted ? 'sm:col-start-2 lg:col-start-1 xl:col-start-2' : ''
        } col-span-1`}
      >
        {number}
      </div>
      <div
        className={`font-bold typo-number-title col-start-2 ${
          shifted ? 'sm:col-start-3 lg:col-start-2 xl:col-start-3' : ''
        } col-span-full self-end leading-[135%] sm:self-center `}
      >
        {title}
      </div>
      <div
        className={`typo-body-1 col-start-2 font-normal ${
          shifted ? 'sm:col-start-3 lg:col-start-2 xl:col-start-3' : 'sm:col-start-2 lg:col-start-2'
        } sm:col-span-6 col-span-3 lg:col-span-3 mt-2 text-text-2`}
      >
        {content}
      </div>
    </div>
  );
}
