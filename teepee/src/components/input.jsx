/* Libs */
import React from 'react';
import classNames from 'classnames';
/* --- Libs */

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.blurHandler = this.blurHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.focusHandler = this.focusHandler.bind(this);
  }

  componentWillMount() {
    // only pass in a sub-set of the available props
    const {
      className, onChange, onBlur, onFocus, onElementMount, type, value,
      ...remainingProps
    } = this.props;
    const elementProps = {
      ...remainingProps,
      // event handlers are added separately, with guards
      ...{
        onBlur: this.blurHandler,
        onChange: this.changeHandler,
        onFocus: this.focusHandler,
        ref: onElementMount
      }
    };

    this.element = type === 'textarea' ? <textarea {...elementProps} /> : <input {...elementProps} />;
  }

  shouldComponentUpdate() {
    return false;
  }

  changeHandler(event) {
    // persist the event in React in case it is needed again
    // when there is an onChange event passed in
    event.persist();

    if (this.props.maxLength) {
      this.limitLength(event.target)
    }

    // only run the change handler if
    // + input is not disabled
    // + there is an onChange function
    if (!this.props.disabled && this.props.onChange) {
      this.props.onChange(event);
    }
  }

  limitLength(input) {
    const newValue = input.value;
    if (newValue.length > this.props.maxLength) {
      // if content is added in the middle, truncate the end of the value
      input.value = newValue.substr(0, this.props.maxLength);
    }
  }

  blurHandler(event) {
    // persist the event in React in case it is needed again
    // when there is an onBlur event passed in
    event.persist();

    // only run the blur handler if
    // + input is not disabled
    // + there is an onBlur function
    if (!this.props.disabled && this.props.onBlur) {
      this.props.onBlur(event);
    }
  }

  focusHandler(event) {
    // persist the event in React in case it is needed again
    // when there is an onBlur event passed in
    event.persist();

    // only run the blur handler if
    // + input is not disabled
    // + there is an onBlur function
    if (!this.props.disabled && this.props.onFocus) {
      this.props.onFocus(event);
    }
  }

  render() {
    const { className, error, type } = this.props;

    // ensure "needsclick" is a class to exempt inputs from FastClick
    const elementClasses = classNames("needsclick", className, {
      'error': error,
      'input': type !== 'checkbox'
    });

    return React.cloneElement(this.element, { className: elementClasses });
  }
}

export default Input;
