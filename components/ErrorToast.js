export default function ErrorToast({ text, className }) {
  return (
    <div
      className={`absolute top-0 right-0 left-0 bg-background-8 py-[22px] px-[18px] border-b-[3px] border-secondary-red rounded-br-[4px] rounded-bl-[4px] mx-auto z-10 sm:w-[355px] ${className}`}
    >
      <p className="typo-body-1 text-secondary-red text-center">{text}</p>
    </div>
  );
}
