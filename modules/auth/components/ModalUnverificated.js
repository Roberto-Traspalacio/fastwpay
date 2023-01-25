// import IntlMessages from 'utils/IntlMessages';
import { Button } from 'components';
import Loader from 'components/Loader';
import { useState } from 'react';
import { Auth } from 'services/Auth.service';

export default function ModalUnverificated({ email, setShowModalVerificate, setShowModalMessage }) {
  const [loading, setLoading] = useState(false);
  const auth = new Auth();
  const SUCCESS_REQUEST_CODE = 200;

  async function sendEmail() {
    setLoading(true);
    const data = await auth.resendEmailVerification({ email });
    if (data?.response.status === SUCCESS_REQUEST_CODE) {
      setShowModalVerificate(false);
      setShowModalMessage(true);
    }
    setLoading(false);
  }

  return (
    <div className="col-span-full flex flex-col absolute top-[50%] translate-y-[-50%] translate-x-[-50%] left-[50%] w-[89%] sm:w-[74.5%] lg:w-[466px] xl:w-[494px]">
      <div className=" bg-background-3 py-[21px] px-[17px] rounded-lg border-r-[3px] border-l-[3px] border-primary-blue xl:relative">
        <p className="text-center typo-body-1 text-text-1">
          You haven't <b>confirmed your email</b> yet
        </p>
        <br />
        <p className="text-center typo-body-1 text-text-1">Please click on the "confirm email" button to continue</p>
      </div>
      <Button
        className="mt-5 h-[30px] flex items-center justify-center sm:mt-[25px] sm:h-[47px] sm:rounded-[25px]"
        onClick={sendEmail}
      >
        {loading ? <Loader /> : 'Confirm email'}
      </Button>
    </div>
  );
}
