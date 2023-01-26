import { Footer, GoHomeButton, Navbar } from 'components';
import Head from 'next/head';
import IntlMessages from 'utils/IntlMessages';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <Navbar />
      <main className="grid-main gap-x-3 px-[18px] md:px-10">
        <GoHomeButton back className="px-0 md:px-0 ml-0 md:ml-0 lg:ml-0 xl:ml-0 xl:px-0 xl:col-span-10 xl:col-start-2">
          <IntlMessages id="common.goBack" />
        </GoHomeButton>
        <section className="col-span-full xl:col-span-10 xl:col-start-2">
          <h3 className="text-center mt-5 typo-display-2 text-text-1 md:mt-8">Privacy Policy</h3>
          {/* 1 */}
          <div className="mt-[27px] md:mt-[37px]">
            <h4 className="font-bold typo-heading-3 text-text-1">1. Please read carefully</h4>
            <p className="mt-3 typo-heading-4 text-text-6">
              Genius. cares deeply about the privacy of its visitors and users. To that end, this Privacy Policy
              (“Privacy Policy”) describes how fastwpay. , together with its affiliated companies worldwide (“fastwpay”,
              “we”, “our”, or “us”), collect, use, and share your Personal Information, as well as an explanation of the
              data rights you may have in that Personal Information. This Privacy Policy applies to all Genius. users,
              including unregistered visitors, registered users, and premium users (collectively, “Users”, “you”, or
              “your”), and to all fastwpay. services, including our websites, web applications, mobile applications, and
              related services (collectively, the “Services”). This Privacy Policy is not intended to override the terms
              of any contract you have with us, nor any rights you may have under other applicable data privacy laws.
              <br />
              Prior to accessing or using our Services, please read this policy and make sure you fully understand our
              practices in relation to your Personal Information. If you read and fully understand this Privacy Policy,
              and remain opposed to our practices, you must immediately leave and discontinue all use of any of our
              Services. If you have any questions or concerns regarding this policy.
            </p>
          </div>
          {/* 2 */}
          <div className="mt-10 md:mt-[67px]">
            <h4 className="font-bold typo-heading-3 text-text-1">2. What ‘Personal Information’ do we collect?</h4>
            <p className="mt-3 typo-heading-4 text-text-6">
              We receive, collect and store any information you enter on our website or provide us in any other way. In
              addition, we collect the Internet protocol (IP) address used to connect your computer to the Internet;
              login; e-mail address; password; computer and connection information and purchase history. We may use
              software tools to measure and collect session information, including page response times, length of visits
              to certain pages, page interaction information, and methods used to browse away from the page. We also
              collect personally identifiable information (including name, email, password, communications); payment
              details (including credit card information), comments, feedback, product reviews, recommendations, and
              personal profile.
            </p>
          </div>
          {/* 3 */}
          <div className="mt-10 md:mt-[67px]">
            <h4 className="font-bold typo-heading-3 text-text-1">3. How do we collect information?</h4>
            <p className="mt-3 typo-heading-4 text-text-6">
              When you conduct a transaction on our website, as part of the process, we collect personal information you
              give us such as your name, address and email address. Your personal information will be used for the
              specific reasons stated above only.
            </p>
          </div>
          {/* 4 */}
          <div className="mt-10 md:mt-[67px]">
            <h4 className="font-bold typo-heading-3 text-text-1">4. Why do we collect such personal information?</h4>
            <p className="mt-3 typo-heading-4 text-text-6">
              We collect such Non-personal and Personal Information for the following purposes:
              <br />
            </p>
            <ol>
              <li>
                <p className="mt-3 typo-heading-4 text-text-6">1. To provide and operate the Services;</p>
              </li>
              <li>
                <p className="mt-3 typo-heading-4 text-text-6">
                  2. To provide our Users with ongoing customer assistance and technical support;
                </p>
              </li>
              <li>
                <p className="mt-3 typo-heading-4 text-text-6">
                  3. To be able to contact our Visitors and Users with general or personalized service-related notices
                  and promotional messages;
                </p>
              </li>
              <li>
                <p className="mt-3 typo-heading-4 text-text-6">
                  4. To create aggregated statistical data and other aggregated and/or inferred Non-personal
                  Information, which we or our business partners may use to provide and improve our respective services;
                </p>
              </li>
              <li>
                <p className="mt-3 typo-heading-4 text-text-6">
                  5. To comply with any applicable laws and regulations.
                </p>
              </li>
            </ol>
          </div>
          {/* 5 */}
          <div className="mt-10 md:mt-[67px]">
            <h4 className="font-bold typo-heading-3 text-text-1">
              5. How do we store, use, share and disclose our site visitors' personal information?
            </h4>
            <p className="mt-3 typo-heading-4 text-text-6">
              Our company is a self hosted platform. Allowing us to sell our products and services to you. Your data may
              be stored through our servers, databases and the general applications. They store your data on secure
              servers behind a firewall.
              <br />
              <br />
              All direct payment gateways offered by fastwpay and used by our company adhere to the standards set by
              PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa,
              MasterCard, American Express and Discover. PCI-DSS requirements help ensure the secure handling of credit
              card information by our store and its service providers.
              <br />
              <br />
              The service providers offered by Genius. and used by our company, are powered by brands like, Google,
              GoDaddy, Netlify and Microsoft to help ensure the secure handling of personal information.
            </p>
          </div>
          {/* 6 */}
          <div className="mt-10 md:mt-[67px]">
            <h4 className="font-bold typo-heading-3 text-text-1">6. How do we communicate with our sites visitors?</h4>
            <p className="mt-3 typo-heading-4 text-text-6">
              We may contact you to notify you regarding your account, to troubleshoot problems with your account, to
              resolve a dispute, to collect fees or monies owed, to poll your opinions through surveys or
              questionnaires, to send updates about our company, or as otherwise necessary to contact you to enforce our
              User Agreement, applicable national laws, and any agreement we may have with you. For these purposes we
              may contact you via email, telephone, text messages, and postal mail.
            </p>
          </div>
          {/* 7 */}
          <div className="mt-10 md:mt-[67px]">
            <h4 className="font-bold typo-heading-3 text-text-1">7. How do we use cookies and other tracking tools?</h4>
            <p className="mt-3 typo-heading-4 text-text-6">
              We and our Third Party Service Providers use cookies and other similar technologies (“Cookies”) in order
              for us to provide our Service and ensure that it performs properly, to analyze our performance and
              marketing activities, and to personalize your experience.
              <br />
              <br />
              You can learn more about how we use cookies and similar technologies and how you can exercise control over
              them in our Cookie Policy.
              <br />
              <br />
              Please note that we do not change our practices in response to a “Do Not Track” signal in the HTTP header
              from a browser or mobile application, however, most browsers allow you to control cookies, including
              whether or not to accept them and how to remove them. You may set most browsers to notify you if you
              receive a cookie, or you may choose to block cookies with your browser.
            </p>
          </div>
          {/* 8 */}
          <div className="mt-10 md:mt-[67px]">
            <h4 className="font-bold typo-heading-3 text-text-1">8. How can you withdraw your consent?</h4>
            <p className="mt-3 typo-heading-4 text-text-6">
              If you don’t want us to process your data anymore, please contact us at info@fastwpay.com
            </p>
          </div>
          {/* 9 */}
          <div className="mt-10 md:mt-[67px]">
            <h4 className="font-bold typo-heading-3 text-text-1">9. Privacy policy updates</h4>
            <p className="mt-3 typo-heading-4 text-text-6">
              We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes
              and clarifications will take effect immediately upon their posting on the website. If we make material
              changes to this policy, we will notify you here that it has been updated, so that you are aware of what
              information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it.
            </p>
          </div>
          {/* 10 */}
          <div className="mt-10 md:mt-[67px] pb-10 md:pb-[60px]">
            <h4 className="font-bold typo-heading-3 text-text-1">10. Questions and Genius. contact information</h4>
            <p className="mt-3 typo-heading-4 text-text-6">
              If you would like to: access, correct, amend or delete any personal information we have about you, you are
              invited to contact us here or send us mail to: info@fastwpay
            </p>
          </div>
          <Footer />
        </section>
      </main>
    </>
  );
}
