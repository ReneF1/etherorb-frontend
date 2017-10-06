import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import RaisedButton from 'material-ui/RaisedButton';
import './BuyingFormContainer.css';
import { formatDollarToFloat } from '../../shared/formater';
import { BuyingForm } from '../';
import { buyTicket } from '../../store/actions';
import { contentEn } from '../../assets';

const customButton = {
  buttonStyle: { borderRadius: '100px', height: '40px', lineHeight: '35px' },
  overlayStyle: { borderRadius: '100px' },
  style: { borderRadius: '100px', minWidth: '200px', color: '#fffff' },
};

function handleClick(e, props) {
  props.buyTicket(formatDollarToFloat(props.buyingForm.values.buyingFormInput));
}

const buyingFormContainer = props => (
  <div className="buyingForm__container" id={'buyingForm'}>
    <BuyingForm />
    <RaisedButton
      label={contentEn.topComponent.buttonLabel}
      style={customButton.style}
      buttonStyle={customButton.buttonStyle}
      overlayStyle={customButton.overlayStyle}
      className="buyingForm_raisedButton"
      secondary
      onClick={e => handleClick(e, props.buyTicket)}
    />
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

export default connect(mapStateToProps, mapDispatchToProps)(buyingFormContainer);
