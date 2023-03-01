export default function NumberItem({ number, title, content, shifted }) {
  return (
    <div className={`col-span-full grid-main gap-y-2 gap-x-[18px] `}>
      <p
        className={`typo-number font-bold self-end leading-[100%] ${
          shifted ? 'sm:col-start-2 lg:col-start-1 xl:col-start-2' : ''
        } col-span-1 sm:mr-6`}
      >
        {number}
      </p>
      <h5
        className={`font-bold typo-number-title col-start-2 ${
          shifted ? 'sm:col-start-3 lg:col-start-2 xl:col-start-3' : ''
        } max-w-[18ch] col-span-full self-center leading-[135%] sm:ml-6 md:ml-0 sm:max-w-[30ch]`}
      >
        {title}
      </h5>
      <p
        className={`typo-body-1 col-start-2 font-normal ${
          shifted ? 'sm:col-start-3 lg:col-start-2 xl:col-start-3' : 'sm:col-start-2 lg:col-start-2'
        } sm:col-span-6 col-span-3 lg:col-span-3 text-text-2 sm:ml-6 md:ml-0 xl:col-end-7 xl:max-w-[44ch] xl2:max-w-[60ch] xl2:col-end-8 sm:text-justify`}
      >
        {content}
      </p>
    </div>
  );
}
