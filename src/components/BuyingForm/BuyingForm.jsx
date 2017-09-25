import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import './BuyingForm.css';

const buyingForm = (props) => {
  const { handleSubmit, handleChange, pristine, submitting, value } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="betValue">What is the ETH/USD value?</label>
        <div>
          <Field
            name="betValue"
            component="input"
            type="number"
            placeholder="ETH/USD Value"
            onChange={handleChange}
            value={value}
          />
        </div>
      </div>

      <div>
        <button type="submit" disabled={pristine || submitting}>Buy Ticket</button>
      </div>
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
