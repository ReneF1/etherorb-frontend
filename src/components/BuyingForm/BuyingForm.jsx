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
    className="buyingFormField__input"
    value={field.input.value}
    onChangeEvent={field.input.onChange}
    type={field.input.type}
    onFocus={field.input.onFocus}
    onMouseUp={field.input.onMouseUp}
  />
);

const buyingForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Field
      name="buyingFormInput"
      component={MaskedCurrencyInput}
    />
  </form>
  );

buyingForm.propTypes = {
  handleSubmit: PropTypes.func,
};

export default reduxForm({
  form: 'buyingForm',
})(buyingForm);
