import Link from 'next/link';
import { Button } from 'components';
import IntlMessages from 'utils/IntlMessages';

export default function MessageModal({ email, text, withButton }) {
  return (
    <div className="absolute top-[50%] translate-y-[-50%] translate-x-[-50%] left-[50%] w-[89%] sm:w-[70.5%] lg:w-[466px] xl:w-[494px] xl:relative">
      <div className="col-span-full bg-background-1 py-[21px] px-[17px] rounded-lg border-r-[3px] border-l-[3px] border-primary-blue">
        <p className="text-center typo-body-1 text-text-1">
          <IntlMessages id="common.goTo" />
          <b>{email}</b>
        </p>
        <br />
        <p className="text-center typo-body-1 text-text-1">{text}</p>
      </div>
      {withButton && (
        <Link href="/">
          <Button className="w-full mt-5 sm:mt-[25px]">Go home</Button>
        </Link>
      )}
    </div>
  );
}
