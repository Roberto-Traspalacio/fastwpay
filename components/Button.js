export default function Button({ className = '', children, onClick, type }) {
  return (
    <button
      type={type || 'button'}
      onClick={onClick}
      className={`${className} bg-primary-blue text-white rounded-[20px] px-[24px] py-[10px]`}
    >
      <div className="typo-body-1">{children}</div>
    </button>
  );
}
