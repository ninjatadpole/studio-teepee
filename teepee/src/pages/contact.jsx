import React from 'react';

import ContactForm from '../components/contact-form';
import SocialLinks from '../components/social-links';

const Contact = function(props) {
  return (
    <main className="page-contact">
      <h1>Get in touch</h1>
      <div className="content">
        <div className="contact-types">
          <dl>
            <dt>
              Email
            </dt>
            <dd>
              <a href="mailto:hello@studioteepee.co.uk">hello@studioteepee.co.uk</a>
            </dd>

            <dt>
              Phone
            </dt>
            <dd>
              01353 611721
            </dd>

            <dt>
              Mobile
            </dt>
            <dd>
              07534323431
            </dd>

            <dt>
              Address
            </dt>
            <dd>
              4 Willow Walk, Ely<br />
              CB7 4AT
            </dd>

            <dt>
              Follow me
            </dt>
            <dd>
              <SocialLinks />
            </dd>
          </dl>

          <p className="privacy">
            I respect your privacy.
            Your details will never be shared with anyone else, ever.
          </p>
        </div>

        <ContactForm page="contact page" />
      </div>
    </main>
  );
}

export default Contact;
