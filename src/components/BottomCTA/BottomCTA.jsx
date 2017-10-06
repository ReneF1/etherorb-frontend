import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import muiThemeable from 'material-ui/styles/muiThemeable';
import PropTypes from 'prop-types';
import Scrollchor from 'react-scrollchor';
import focusId from '../../shared/focusHelper';
import { contentEn } from '../../assets';
import './BottomCTA.css';
import etherscanLogo from '../../assets/media/etherscan.png';
import githubLogo from '../../assets/media/github.png';

const customButton = {
  buttonStyle: { borderRadius: '100px', height: '40px', lineHeight: '35px' },
  overlayStyle: { borderRadius: '100px' },
  style: { borderRadius: '100px', minWidth: '200px' },
};
const customButtonSecondary = {
  buttonStyle: { borderRadius: '100px', height: '40px', border: '1px solid #ff3823', lineHeight: '35px' },
  overlayStyle: { borderRadius: '100px' },
  style: { borderRadius: '100px', minWidth: '200px' },
};

const BottomCTA = props =>
    (
      <div>
        <h2>{contentEn.bottomCTA.headLineTop}<br />{contentEn.bottomCTA.headLineBot}</h2>
        <div
          className="bottomCTA__Divider"
          style={{ backgroundColor: props.muiTheme.palette.accent1Color }}
        />
        <div className="bottomCTA__LogoWrapper">
          <img className="bottomCTA__Logo bottomCTA__Logo--left" alt="" src={etherscanLogo} />
          <img className="bottomCTA__Logo" alt="" src={githubLogo} />
        </div>
        <div className="bottomCTA__ButtonWrapper">
          <Scrollchor to="#buyingForm" className="nav-link" afterAnimate={() => focusId('buyingFormField')}>
            <RaisedButton
              label={contentEn.bottomCTA.buttonLabelCTA}
              secondary
              style={customButton.style}
              buttonStyle={customButton.buttonStyle}
              overlayStyle={customButton.overlayStyle}
              className="headerBar_raisedButton"
            />
          </Scrollchor>
          <RaisedButton
            label={contentEn.bottomCTA.buttonLabelSec}
            labelColor={'#ff3823'}
            secondary={false}
            style={customButtonSecondary.style}
            buttonStyle={customButtonSecondary.buttonStyle}
            overlayStyle={customButtonSecondary.overlayStyle}
            className="headerBar_raisedButton"
          />
        </div>
      </div>
    );

BottomCTA.propTypes = {
  muiTheme: PropTypes.shape(PropTypes.object.isRequired).isRequired,
};

export default muiThemeable()(BottomCTA);
