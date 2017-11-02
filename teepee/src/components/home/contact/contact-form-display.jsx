import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../input';

function HomeContactFormDisplay (props) {
  const { formAction, handleSubmit } = props;

  return (
    <form
      action={ formAction }
      className="form"
      method="post"
      onSubmit={ handleSubmit }
    >
      <p>
        Please get in touch if you would like me to come and visit
        you to discuss your future project
      </p>
      <fieldset>
        <label for="contact-name">name</label>
        <Input
          type="text"
          id="contact-name"
          name="name"
          placeholder="name"
        />
      </fieldset>
      <fieldset>
        <label for="contact-contact">contact no / email</label>
        <Input
          type="text"
          id="contact-contact"
          name="contact"
          placeholder="contact no / email"
        />
      </fieldset>
      <fieldset>
        <label for="contact-message">comments</label>
        <Input
          type="textarea"
          id="contact-message"
          name="message"
          placeholder="comments"
        />
      </fieldset>
      <fieldset className="actions">
        <input type="submit" />
        <button className="submit" onClick={ handleSubmit }>send</button>
      </fieldset>
    </form>
  )
}

HomeContactFormDisplay.propTypes = {
  formAction: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default HomeContactFormDisplay;
