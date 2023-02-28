import { useState } from 'react';
import Form from 'modules/home/components/Form';
import Contact from 'modules/home/components/Contact';
import IntlMessages from 'utils/IntlMessages';

export default function SectionForm() {
  const [messageSended, setMessageSended] = useState(false);

  return (
    <section className="mt-[72px] esm:mt-12 lg:px-10 xl:px-0 xl:max-w-[1160px] xl:mb-[60px] xl:mt-64 xl:mx-auto xl2:max-w-[1277px] xl2:mt-[365px] xxl:mt-[465px]">
      <Form setMessageSended={setMessageSended}>
        <Contact className="pb-8 col-span-full lg:col-start-2 lg:col-span-6 lg:pb-0 xl:col-start-2 xl:col-span-2 xl:row-start-2 xl:row-span-6" />
      </Form>
      {messageSended && (
        <div className="w-full fixed top-[14px] left-0 right-0 px-[18px] md:top-8 md:px-10 xl:w-[849px] xl:mx-auto xl:px-0">
          <div
            className="border-b-[3px] rounded-[4px] w-full h-[62px] flex justify-center items-center"
            style={{ borderColor: '#448E84', backgroundColor: '#E0F6F3' }}
          >
            <p className="typo-body-1" style={{ color: '#448E84' }}>
              <IntlMessages id="messageSentSuccessfully" />
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
