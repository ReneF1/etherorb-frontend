import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Scrollchor from 'react-scrollchor';
import focusId from '../../shared/focusHelper';
import { contentEn, logo } from '../../assets';
import './HeaderBar.css';

const customButton = {
  buttonStyle: { borderRadius: '100px', height: '40px', lineHeight: '40px' },
  overlayStyle: { borderRadius: '100px', height: '40px', lineHeight: '40px' },
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
        <Scrollchor to="#buyingForm" className="nav-link" afterAnimate={() => focusId('buyingFormField')}>
          <RaisedButton
            label={contentEn.headerBar.buttonLabel}
            secondary
            style={customButton.style}
            buttonStyle={customButton.buttonStyle}
            overlayStyle={customButton.overlayStyle}
            className="headerBar_raisedButton hide-mobile"
          />
        </Scrollchor>
      </div>
    </div>
  </div>
);

HeaderBar.propTypes = {
  muiTheme: PropTypes.shape(PropTypes.object.isRequired).isRequired,
};

export default muiThemeable()(HeaderBar);
