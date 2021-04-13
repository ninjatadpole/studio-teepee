import React from "react";
import PropTypes from "prop-types";
import xhr from "xhr";
import classnames from "classnames";

import ContactFormDisplay from "./contact-form-display";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formError: null,
      formSending: false,
      formSent: false,
      location: {
        page: props.page
      }
    };

    this.addInputRef = this.addInputRef.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.makeErrorEmail = this.makeErrorEmail.bind(this);

    this.formAction = "https://studioteepee.sharpfrog.com/";
    this.formElements = [];
  }

  addInputRef(el) {
    if (el) {
      const elName = el.getAttribute("name");
      if (elName) {
        this.formElements.push({ name: elName, element: el });
      }
    } else {
      this.formElements = null;
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      formSending: true
    });

    const formData = this.formElements.reduce((aggregate, input) => {
      return {
        ...aggregate,
        [input.name]: input.element.value
      };
    }, {});

    this.submitForm({
      ...formData,
      ...this.state.location
    });
  }

  submitForm(formData) {
    xhr.post(
      {
        data: formData,
        json: true,
        url: this.formAction
      },
      (err, resp, body) => {
        if (err || resp.statusCode < 200 || resp.statusCode > 299) {
          this.setState({
            formError: formData,
            formSending: false
          });

          if (window.ga) {
            window.ga("send", "event", {
              eventCategory: "contact form",
              eventAction: "failed",
              eventLabel: JSON.stringify(formData)
            });
          }
        } else {
          this.setState({
            formSending: false,
            formSent: true
          });

          if (window.ga) {
            window.ga("send", "event", {
              eventCategory: "contact form",
              eventAction: "sent",
              eventLabel: JSON.stringify(formData)
            });
          }
        }
      }
    );
  }

  makeErrorEmail() {
    const formData = this.state.formError;

    if (formData) {
      const introParts = [
        "Hello studio teepee.",
        "I tried to use the form on your website but it didn't work.",
        "Here is what I tried to let you know...",
        ""
      ];

      const formParts = [
        ...Object.keys(formData).map((key, index) => {
          return `${key}: "${formData[key]}"`;
        })
      ];

      return encodeURIComponent([...introParts, ...formParts].join("\r\n"));
    } else {
      return "";
    }
  }

  render() {
    const { addInputRef, formAction, handleSubmit, makeErrorEmail } = this;
    const { formError, formSending, formSent } = this.state;

    return (
      <ContactFormDisplay
        {...{
          addInputRef,
          className: classnames({
            sent: formSent,
            sending: formSending,
            error: formError
          }),
          errorMsg: makeErrorEmail(),
          formAction,
          handleSubmit
        }}
      />
    );
  }
}

ContactForm.propTypes = {
  page: PropTypes.string.isRequired
};

export default ContactForm;
