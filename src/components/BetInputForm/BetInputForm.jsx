/**
 * Created by renefuchtenkordt on 04.07.17.
 */
import React from 'react';
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux';
import BetInput from './BetInput'

const required = value => (value == null ? 'Required' : undefined);
const email = value =>
    (value && !/^\$?(([1-9][0-9]{0,2}(,[0-9]{2})*)|0)?\.[0-9]{1,2}$/i.test(value)
        ? 'Invalid Amount'
        : undefined);

class BetInputForm extends React.Component {

    render() {
        const {onSubmit, handleSubmit, value, onChange} = this.props;
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <Field name="ethBet" component={BetInput} validate={[required, email]}/>
            </form>
        )
    }
}

BetInputForm = reduxForm({
    form: 'BetInputForm',
    enableReinitialize: true,
})(BetInputForm);

BetInputForm = connect(
    state => ({
        initialValues: {ethBet: (Math.round((state.ethReducer.ethUsd * 10))/10).toFixed(2)}
    }),
)(BetInputForm)

export default BetInputForm
