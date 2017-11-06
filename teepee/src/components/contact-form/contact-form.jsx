import React from 'react';
import PropTypes from 'prop-types';
import xhr from 'xhr';
import classnames from 'classnames';

import HomeContactFormDisplay from './contact-form-display';

class HomeContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formError: null,
      formSending: false,
      formSent: false,
      location: {
        'page': props.page,
      },
    }

    this.addInputRef = this.addInputRef.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.makeErrorEmail = this.makeErrorEmail.bind(this);

    this.formAction = "/contact-handler.php";
    this.formElements = [];
  }

  addInputRef(el) {
    if (el) {
      const elName = el.getAttribute('name');
      if (elName) {
        this.formElements.push({name: elName, element: el});
      }
    } else {
      this.formElements = null;
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      formSending: true,
    });

    const formData = this.formElements.reduce((aggregate, input) => {
      return {
        ...aggregate,
        [input.name]: input.element.value}
    }, {});

    this.submitForm({
      ...formData,
      ...this.state.location,
    });
  }

  submitForm(formData) {
    xhr({
      data: formData,
      json: true,
      method: 'POST',
      url: this.formAction,
    }, (err, resp, body) => {
      if(err) {
        this.setState({
          formError: formData,
          formSending: false,
        })
      } else {
        this.setState({
          formSending: false,
          formSent: true,
        });
      }
    });
  }

  makeErrorEmail() {
    const formData = this.state.formError;

    if (formData) {
      const introParts = [
        "Hello studio teepee.",
        "I tried to use the form on your website but it didn't work.",
        "Here is what I tried to let you know...",
        "",
      ];

      const formParts = [
        ...(Object.keys(formData).map((key, index) => {
          return `${key}: "${formData[key]}"`;
        }))
      ];

      return encodeURIComponent([
        ...introParts,
        ...formParts,
      ].join("\r\n"));
    } else {
      return '';
    }
  }

  render() {
    const {
      addInputRef,
      formAction,
      handleSubmit,
      makeErrorEmail,
    } = this;
    const { formError, formSending, formSent } = this.state;

    return (
      <HomeContactFormDisplay
        { ...{
          addInputRef,
          className: classnames({
            sent: formSent,
            sending: formSending,
            error: formError,
          }),
          errorMsg: makeErrorEmail(),
          formAction,
          handleSubmit
        } }
      />
    );
  }
}

HomeContactForm.propTypes = {
  page: PropTypes.string.isRequired,
}

export default HomeContactForm;
