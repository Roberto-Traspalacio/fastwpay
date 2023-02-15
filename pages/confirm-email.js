import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Auth } from 'services/Auth.service';

export default function ConfirmEmail() {
  const router = useRouter();
  const auth = new Auth();
  const SUCCESS_REQUEST_CODE = 200;
  useEffect(() => {
    (async () => {
      const token = router?.asPath.split('token=')[1];
      if (token) {
        const data = await auth.verifyEmail(token);
        if (data?.response.status === SUCCESS_REQUEST_CODE) {
          router.push('/login');
        }
      }
    })();
  }, []);

  return (
    <div className="h-screen flex justify-center items-center">
      <h3 className="typo-heading-1 m-auto text-center">
        Email confirmed successfully
        <br />
        You will be redirected to login shortly
      </h3>
    </div>
  );
}
