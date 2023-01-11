export default function BalanceCard() {
  return (
    <div className="w-[100%] bg-background-5 h-[139px] pl-[18px] pb-3 rounded-[14px] relative overflow-hidden">
      <div className="flex items-center gap-[5px] pt-6">
        <div className="w-[10px] h-[10px] round-[1px] bg-white rotate-45"></div>
        <p className="text-white typo-heading-3">Balance</p>
      </div>
      <p className="text-white typo-heading-1 mt-[10px]">203,876.34 Є</p>
      <p className="typo-body-1 mt-[23px] text-white">Next withdrawal thursday 12/15</p>
      {/* Ellipse */}
      <div className="w-[225px] h-[180px] rounded-[50%] rotate-90 absolute right-[-105px] top-0 bottom-0 opacity-50" style={{ background: 'rgba(248, 247, 247, 0.22)' }}></div>
    </div>
  );
}
