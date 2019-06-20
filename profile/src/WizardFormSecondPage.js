import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';

const WizardFormThirdPage = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
};
export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormThirdPage);
