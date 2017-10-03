import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import muiThemeable from 'material-ui/styles/muiThemeable';
import './BuyingFormContainer.css';
import { BuyingForm } from '../';
import { buyTicket } from '../../store/actions';
import { contentEn } from '../../assets';

const customButton = {
    buttonStyle: { borderRadius: '100px', height: '40px', lineHeight: '35px' },
    overlayStyle: { borderRadius: '100px' },
    style: { borderRadius: '100px', minWidth: '200px' },
};

const buyingFormContainer = props => (
  <div className="buyingForm__container">
    <BuyingForm/>
    <RaisedButton
        style={customButton.style}
        buttonStyle={customButton.buttonStyle}
        overlayStyle={customButton.overlayStyle}
        className="BuyingFormConatainer_raisedButton"
        secondary
        onClick={props.buyTicket(parseInt(props.buyingForm, 10))}>{contentEn.topComponent.buttonLabel}</RaisedButton>
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
