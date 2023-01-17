export default function Input({ className, type, label, disabled }) {
  return (
    <div className={className}>
      <label className="typo-body-2 ml-[8px] text-text-1" htmlFor="">
        {label}
      </label>
      <input
        disabled={disabled}
        className="w-[100%] h-9 mt-2 bg-background-7 rounded-lg text-text-2 pl-[14px] typo-body-1 sm:h-12 lg:mt-[10px]"
        type={type}
      />
    </div>
  );
}
