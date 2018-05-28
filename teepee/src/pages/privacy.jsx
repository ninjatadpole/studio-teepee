import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = function(props) {
  const trackClick = (e) => {
    if (window.ga) {
      window.ga('send', 'event', {
        eventCategory: 'privacy policy',
        eventAction: 'clicked',
        eventLabel: `privacy policy ${e.target.className}`
      });
    }
  }

  return (
    <main className="page-privacy">
      <h1>Studio TeePee Privacy Policy</h1>
      <time datetime="2018-05-23 00:00">23rd May 2018</time>
      <article className="content">
        <section>
          <p>
            This policy sets out the basis on which any personal data we collect
            from you, or that you have provded to us, will be processed
            by <span className="brand">Studio TeePee</span>.  If you have any
            questions about this policy, please <Link
              to="/contact"
              className="intro--contact-us">
              contact us
            </Link>.
          </p>
        </section>

        <section>
          <h2>
            Your Personal Information
          </h2>
          <p>
            Your privacy is important to us, and that’s something that will
            never change.  By providing personal information, such as your
            name and email address, you agree to us contacting you.  Your
            personal information will only be used by us, and under no
            circumstances will we sell your information to another organization.
          </p>
          <p>
            We may collect and process information about you, including:-
          </p>
          <ul>
            <li>
              Information that you provide by filling out forms on our website,
              including our <Link
                to="/contact"
                className="your-personal-info--contact-us"
                onClick={ trackClick }>
                  contact us
                </Link> function.
            </li>
            <li>
              Following your contact to us, we keep a record of your contact
              details.  We use ‘<a
                href="https://realtimecrm.co.uk/privacy-policy/"
                target="realtime-crm"
                className="your-personal-info--realtime-crm"
                onClick={ trackClick }>Realtime CRM</a>’
              by Cambridge Software for this purpose.
            </li>
            <li>
              We may also collect information provided via email or other
              written correspondence, telephone calls, and other web-based
              forms.  We use <a
                href="https://www.dreamhost.com/legal/privacy-policy/"
                target="dreamhost"
                className="your-personal-info--dreamhost"
                onClick={ trackClick }>Dreamhost</a> for
              web and email hosting.
            </li>
            <li>
              If you enter into a service agreement with us, we may store your
              information on <a
                href="https://www.xero.com/uk/about/terms/privacy/"
                target="xero"
                className="your-personal-info--xero"
                onClick={ trackClick }>Xero</a> for accounting purposes.
            </li>
            <li>
              When administrating a contract between a client and contractor,
              information is shared with <a
                href="https://www.architecture.com/about/privacy-policy"
                target="riba"
                className="your-personal-info--riba-contracts"
                onClick={ trackClick }>RIBA Contracts</a>.
            </li>
          </ul>
          <p>
            We will only hold your information for as long as we need it.  You
            can request for us to delete any information we have about you at
            any point.
          </p>
          <p>
            When visiting our website we collect device information using the following:-
          </p>
          <h3>
            Cookies
          </h3>
          <p>
            Cookies are data files that distinguish you from others.  You are
            able to change or disable cookies being stored on your computer
            by changing your browser settings.
          </p>
          <h3>
            IP Addresses
          </h3>
          <p>
            We may collect statistical information using your IP address,
            browser type, referring / exit pages, and data/time stamps.
            This information does not, and will never be used to, identify an
            individual.  We collect this information to understand how our
            website is being used and is performing.  We use <a
              href="https://privacy.google.com/businesses/compliance"
              target="google-analytics"
              className="your-personal-info--google-analytics"
              onClick={ trackClick }>Google Analytics</a> for this purpose.
          </p>
        </section>

        <section>
          <h2>
            Where We Store Your Personal Information
          </h2>
          <p>
            All information is stored securely and is not transferred outside
            of the European Economic Area (“EEA”).
          </p>
        </section>

        <section>
          <h2>
            Direct Marketing and Other Forms of Communication
          </h2>
          <p>
            We will send you our annual newsletter with progress
            of <span className="brand">Studio TeePee</span>.  You may opt
            out from receiving this newsletter at any time, and a function
            for this purpose will be included in each newsletter.
          </p>
          <p>
            We may also retain copies of any correspondence you send us for:
            internal record keeping; answering your queries; product
            development.
          </p>
        </section>

        <section>
          <h2>
            Your Rights
          </h2>
          <p>
            You are a European resident, you have the right to access any
            personal information we hold about you.  You can ask that your
            personal information be corrected, updated, or deleted by using
            the contact information below.
          </p>
        </section>

        <section>
          <h2>
            Contact Us
          </h2>
          <p>
            For further information, questions, or comments please email us
            at <a
              href="mailto:hello@studioteepee.co.uk"
              className="contact-us--email"
              onClick={ trackClick }
            >hello@studioteepee.co.uk</a>.
          </p>
        </section>

        <section>
          <h2>
            Changes to This Policy
          </h2>
          <p>
            We may update this privacy policy from time to time, and any
            changes we make will be posted on this page.
          </p>
        </section>
      </article>
    </main>
  );
}

export default PrivacyPolicy;
