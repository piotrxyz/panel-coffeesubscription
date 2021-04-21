const validate = (values) => {
  const errors = {};
  if (!values.first_name) {
    errors.first_name = 'Pole jest wymagane';
  }
  if (!values.last_name) {
    errors.last_name = 'Pole jest wymagane';
  }
  if (!values.phone_number) {
    errors.phone_number = 'Pole jest wymagane';
  }
  if (!values.company_name) {
    errors.company_name = 'Pole jest wymagane';
  }
  if (!values.nip) {
    errors.nip = 'Pole jest wymagane';
  }
  if (!values.company_street) {
    errors.company_street = 'Pole jest wymagane';
  }
  return errors;
};

export default validate;
