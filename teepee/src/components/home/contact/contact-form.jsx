import React from 'react';

import HomeContactFormDisplay from './contact-form-display';

class HomeContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.formAction = "https://studioteepee.co.uk/contact-action";
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const { formAction, handleSubmit } = this;

    return (
      <HomeContactFormDisplay
        { ...{
          formAction,
          handleSubmit
        } }
      />
    );
  }
}

export default HomeContactForm;
