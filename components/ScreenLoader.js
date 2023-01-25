import Loader from './Loader';

export default function ScreenLoader() {
  return (
    <div className="w-full h-screen bg-background-2 fixed z-10 top-0 right-0 bottom-0 left-0 flex items-center justify-center">
      <Loader color="#295BB7" width="48px" height="45px" />
    </div>
  );
}
