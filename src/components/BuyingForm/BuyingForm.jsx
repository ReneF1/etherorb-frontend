import React from 'react';
import {reduxForm} from 'redux-form';
import PropTypes from 'prop-types';
import './BuyingForm.css';
import CurrencyInput from 'react-currency-input';

const buyingForm = (props) => {
    const {handleSubmit, handleChange, pristine, submitting, value} = props;
    return (
        <form onSubmit={handleSubmit}>
            <CurrencyInput value={100} prefix="$" precision="2"/>
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
