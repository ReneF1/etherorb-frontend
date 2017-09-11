import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import muiThemeable from 'material-ui/styles/muiThemeable';
import PropTypes from 'prop-types';
import './BottomCTA.css';
import etherscanLogo from '../../assets/media/etherscan.png';
import githubLogo from '../../assets/media/github.png';

const BottomCTA = props =>
    (
      <div>
        <h2>{props.headLineTop}<br />{props.headLineBot}</h2>
        <div
          className="bottomCTA__Divider"
          style={{ backgroundColor: props.muiTheme.palette.accent1Color }}
        />
        <div className="bottomCTA__LogoWrapper">
          <img className="bottomCTA__Logo bottomCTA__Logo--left" alt="" src={etherscanLogo} />
          <img className="bottomCTA__Logo" alt="" src={githubLogo} />
        </div>
        <div className="bottomCTA__ButtonWrapper">
          <RaisedButton
            label={props.buttonLabelCTA}
            secondary
            style={props.customButton.style}
            buttonStyle={props.customButton.buttonStyle}
            overlayStyle={props.customButton.overlayStyle}
            onClick={props.toggleBuyingDialog}
            className="headerBar_raisedButton"
          />
          <RaisedButton
            label={props.buttonLabelSec}
            labelColor={'#ff3823'}
            secondary={false}
            style={props.customButtonSecondary.style}
            buttonStyle={props.customButtonSecondary.buttonStyle}
            overlayStyle={props.customButtonSecondary.overlayStyle}
            className="headerBar_raisedButton"
          />
        </div>
      </div>
    );

BottomCTA.propTypes = {
  headLineTop: PropTypes.string.isRequired,
  headLineBot: PropTypes.string.isRequired,
  muiTheme: PropTypes.shape(PropTypes.object.isRequired).isRequired,
  buttonLabelCTA: PropTypes.string.isRequired,
  customButton: PropTypes.shape(PropTypes.object.isRequired).isRequired,
  toggleBuyingDialog: PropTypes.element.isRequired,
  buttonLabelSec: PropTypes.string.isRequired,
  customButtonSecondary: PropTypes.element.isRequired,
};

export default muiThemeable()(BottomCTA);
