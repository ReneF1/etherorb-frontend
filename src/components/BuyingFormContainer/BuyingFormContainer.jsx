import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import './BuyingFormContainer.css';
import { BuyingForm } from '../';
import { buyTicket } from '../../store/actions';

const buyingFormContainer = props => (
  <div className="buyingForm__container">
    <BuyingForm onSubmit={values => props.buyTicket(parseInt(values.buyingFormContainer, 10))} />
  </div>
    );

buyingFormContainer.propTypes = {
  buyTicket: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  buyingForm: state.form.buyingForm,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  buyTicket,
}, dispatch);

export default reduxForm({ form: 'BuyingForm' })(connect(mapStateToProps, mapDispatchToProps)(buyingFormContainer));
