/**
 * Created by renefuchtenkordt on 07.07.17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { contentEn, logo } from '../../assets';
import './HeaderBar.css';

const customButton = {
  buttonStyle: { borderRadius: '100px', height: '40px', lineHeight: '35px' },
  overlayStyle: { borderRadius: '100px' },
  style: { borderRadius: '100px', minWidth: '200px' },
};

const HeaderBar = props => (
  <div className="headerBar">
    <div className="headerBar__wrapper">
      <div className="headerBar__leftElement"><img
        src={logo}
        className="headerBar__logo"
        alt={`${contentEn.headerBar.title + contentEn.headerBar.subtitle} logo`}
      /><span
        className="headerBar__logoTextPrimary"
        style={{ color: props.muiTheme.palette.accent1Color }}
      >{contentEn.headerBar.title}</span><span
        className="headerBar__logoTextSecondary"
        style={{ color: props.muiTheme.palette.accent1Color }}
      >{contentEn.headerBar.subtitle}</span></div>
      <div className="headerBar__rightElement">
        <RaisedButton
          label={contentEn.headerBar.buttonLabel}
          secondary
          style={customButton.style}
          buttonStyle={customButton.buttonStyle}
          overlayStyle={customButton.overlayStyle}
          className="headerBar_raisedButton"
        />
      </div>
    </div>
  </div>
);

HeaderBar.propTypes = {
  muiTheme: PropTypes.shape(PropTypes.object.isRequired).isRequired,
};

export default muiThemeable()(HeaderBar);
