/**
 * Created by renefuchtenkordt on 07.07.17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import muiThemeable from 'material-ui/styles/muiThemeable';
import './HeaderBar.css';

const HeaderBar = props => (
  <div className="headerBar">
    <div className="headerBar__wrapper">
      <div className="headerBar__leftElement"><img
        src={props.logo}
        className="headerBar__logo"
        alt={`${props.title + props.subtitle} logo`}
      /><span
        className="headerBar__logoTextPrimary"
        style={{ color: props.muiTheme.palette.accent1Color }}
      >{props.title}</span><span
        className="headerBar__logoTextSecondary"
        style={{ color: props.muiTheme.palette.accent1Color }}
      >{props.subtitle}</span></div>
      <div className="headerBar__rightElement">
        <RaisedButton
          label={props.buttonLabel}
          secondary
          style={props.customButton.style}
          buttonStyle={props.customButton.buttonStyle}
          onClick={props.toggleBuyingDialog}
          overlayStyle={props.customButton.overlayStyle}
          className="headerBar_raisedButton"
        />
      </div>
    </div>
  </div>
);

HeaderBar.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  muiTheme: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  customButton: PropTypes.string.isRequired,
  toggleBuyingDialog: PropTypes.string.isRequired,
};

export default muiThemeable()(HeaderBar);
