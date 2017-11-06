import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Input from '../input';

function ContactFormDisplay (props) {
  const {
    addInputRef,
    errorMsg,
    formAction,
    handleSubmit
  } = props;

  const mailAddress = 'hello@studioteepee.co.uk';
  const mailBody = errorMsg;

  return (
    <form
      action={ formAction }
      className={ classnames('contact-form', props.className) }
      method="post"
      onSubmit={ handleSubmit }
    >
      <p>
        Please get in touch if you would like me to come and visit
        you to discuss your future project
      </p>
      <fieldset>
        <label htmlFor="contact-name">name</label>
        <Input
          type="text"
          id="contact-name"
          name="name"
          placeholder="name"
          onElementMount={ addInputRef }
        />
      </fieldset>
      <fieldset>
        <label htmlFor="contact-contact">contact no / email</label>
        <Input
          type="text"
          id="contact-contact"
          name="contact"
          placeholder="contact no / email"
          onElementMount={ addInputRef }
        />
      </fieldset>
      <fieldset>
        <label htmlFor="contact-message">comments</label>
        <Input
          type="textarea"
          id="contact-message"
          name="message"
          placeholder="comments"
          onElementMount={ addInputRef }
        />
      </fieldset>
      <fieldset className="actions">
        <input type="submit" />
        <button className="submit" onClick={ handleSubmit }>send</button>
      </fieldset>
      <p className="message">
        <span className="sending">Sending...</span>
        <span className="sent">Message sent!</span>
        <span className="error">
          There was a problem with this form.<br />
          You can <a href={ `mailto:${mailAddress}?body=${mailBody}` }>click
          here to send your message by email</a> instead.
        </span>
      </p>
    </form>
  )
}

ContactFormDisplay.propTypes = {
  addInputRef: PropTypes.func.isRequired,
  errorMsg: PropTypes.string,
  formAction: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default ContactFormDisplay;
