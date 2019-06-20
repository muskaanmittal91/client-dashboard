const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  }
  if (!values.card_holder_name) {
    errors.card_holder_name = "Required";
  }
  if (!values.lastName) {
    errors.lastName = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.sex) {
    errors.sex = "Required";
  }
  if (!values.mode) {
    errors.mode = "Required";
  }
  if (!values.card_number) {
    errors.card_number = "Required";
  } else if (!/^[0-9]{12}$/.test(values.card_number))
    errors.card_number = "Invalid format";
  if (!values.cvv) {
    errors.cvv = "Required";
  } else if (!/^[0-9]{3}$/.test(values.cvv)) errors.cvv = "Invalid format";
  return errors;
};

export default validate;
