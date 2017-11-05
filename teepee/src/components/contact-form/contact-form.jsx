import React from 'react';
import xhr from 'xhr';

import HomeContactFormDisplay from './contact-form-display';

class HomeContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formSending: false,
      formSent: false,
    }

    this.addInputRef = this.addInputRef.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.formAction = "http://demo.studioteepee.co.uk/contact-handler.php";
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

    this.submitForm(formData);
  }

  submitForm(formData) {
    const request = xhr({
      body: formData,
      json: true,
      url: this.formAction,
      method:'POST',
    }, function (err, resp, body) {
      if(err) {
        console.error('WAS ERR', err)
      } else {
        this.setState({
          formSent: true,
        })
      }
    })
  }

  render() {
    const { addInputRef, formAction, handleSubmit } = this;
    const { formSending, formSent } = this.state;

    return (
      <HomeContactFormDisplay
        { ...{
          addInputRef,
          className: (formSent ? 'sent' : (formSending ? 'sending' : '')),
          formAction,
          handleSubmit
        } }
      />
    );
  }
}

export default HomeContactForm;
