import React from 'react';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';
import CurrencyInput from 'react-currency-input';
import './BuyingForm.css';

const MaskedCurrencyInput = field => (
  <CurrencyInput
    prefix="$"
    precision="2"
    id={'buyingFormField'}
    value={field.input.value}
    onChange={() => field.input.onChange(field.input.value)}
    className="buyingFormField__input"
    type={field.input.type}
    onFocus={field.input.onFocus}
    onMouseUp={field.input.onMouseUp}
  />
);

const buyingForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="buyingFormInput"
        component={MaskedCurrencyInput}
      />
    </form>
  );
};

buyingForm.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  value: PropTypes.func,
};

export default reduxForm({
  form: 'buyingForm',
})(buyingForm);
