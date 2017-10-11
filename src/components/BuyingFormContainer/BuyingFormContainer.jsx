import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import RaisedButton from 'material-ui/RaisedButton';
import './BuyingFormContainer.css';
import { formatDollarToFloat } from '../../shared/formater';
import { BuyingForm } from '../';
import { buyTicket, toggleSnackbar } from '../../store/actions';
import { contentEn } from '../../assets';

const customButton = {
  buttonStyle: { borderRadius: '100px', height: '40px', lineHeight: '40px' },
  overlayStyle: { borderRadius: '100px', height: '40px', lineHeight: '40px' },
  style: { borderRadius: '100px', minWidth: '200px', color: '#fffff' },
};

const handleClick = (props) => {
  props.buyTicket(formatDollarToFloat(props.buyingForm.values.buyingFormInput));
  props.toggleSnackbar(`${'🎉🎉 Prediction Recieved '}${props.buyingForm.values.buyingFormInput}🎉🎉`);
};

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
      onClick={() => handleClick(props)}
    />
  </div>
);

buyingFormContainer.propTypes = {
  buyTicket: PropTypes.func.isRequired,
  buyingForm: PropTypes.object,
};

buyingFormContainer.defaultProps = {
  buyingForm: {},
};


const mapStateToProps = state => ({
  buyingForm: state.form.buyingForm,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  buyTicket,
  toggleSnackbar,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(buyingFormContainer);
