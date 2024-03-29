import Image from 'next/image';

export default function FeatureItem({ shadow, title, className = '', content, src = 'null' }) {
  return (
    <div className={`${className} flex flex-col items-center xl:items-start`}>
      <Image className={`mb-4 ${shadow} rounded-full sm:w-[90px]`} src={src} alt="" />
      <div className="font-bold text-center typo-heading-4 xl:text-start">{title}</div>
      <div className="bg-primary-blue w-14 h-[2px] my-4" />
      <p className="font-normal text-center typo-body-1 text-text-2 xl:text-left">{content}</p>
    </div>
  );
}
