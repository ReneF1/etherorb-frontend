import React from 'react';
import {reduxForm, Field} from 'redux-form';
import PropTypes from 'prop-types';
import './BuyingForm.css';
import CurrencyInput from 'react-currency-input';

const buyingForm = (props) => {
    const {handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field name="myField" component={props =>
                <CurrencyInput
                    currentValue={{val: props.value}}
                    thingsChanged={param => props.onChange(param.val)}
                    prefix="$"
                    precision="2"
                    id={'buyingFormField'}/>
            }/>
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
