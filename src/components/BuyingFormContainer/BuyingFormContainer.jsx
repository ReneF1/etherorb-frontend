import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import './BuyingFormContainer.css';
import { BuyingForm } from '../';
import { buyTicket } from '../../store/actions';
import RaisedButton from 'material-ui/RaisedButton';

const customButton = {
    buttonStyle: { borderRadius: '100px', height: '40px', lineHeight: '35px' },
    overlayStyle: { borderRadius: '100px' },
    style: { borderRadius: '100px', minWidth: '200px' },
};

const buyingFormContainer = props => (
  <div className="buyingForm__container">
    <BuyingForm/>
    <RaisedButton style={customButton} onClick={props.buyTicket(parseInt(props.buyingForm, 10))}>Test</RaisedButton>
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
