import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;
const WizardFormFirstPage = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="firstName"
        type="text"
        component={renderField}
        label="First Name"
      />
      <Field
        name="lastName"
        type="text"
        component={renderField}
        label="Last Name"
      />
      <Field name="email" type="email" component={renderField} label="Email" />
      <div>
        <label>Gender</label>
        <div>
          <label>
            <Field name="sex" component="input" type="radio" value="male" />
            {' '}
            Male
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="female" />
            {' '}
            Female
          </label>
          <Field name="sex" component={renderError} />
        </div>
      </div>
      <div>
        <label>Mode of payment</label>
        <div>
          <label>
            <Field name="mode" component="input" type="radio" value=" credit card" />
            {' '}
            Credit Card
          </label>
          <label>
            <Field name="mode" component="input" type="radio" value="debit card" />
            {' '}
            Debit Card
          </label>
          <Field name="mode" component={renderError} />
        </div>
      </div>
      <Field name="card_number" type="text" component={renderField} label="Card Number" pattern="[0-9]{12}" />
      <Field name="cvv" type="text"  component={renderField} label="CVV" pattern="[0-9]{3}" />
      <Field name="card_holder_name" type="text" component={renderField} label="Card Holder Name" pattern="[A-Za-z ]+" />
      <div>
        <button type="submit" className="next">Next</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormFirstPage);
